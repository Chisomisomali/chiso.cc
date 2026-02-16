export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image?: string;
  readTime: number;
}

export interface BlogsData {
  blogs: BlogPost[];
}

// In-memory storage for blogs (persisted via API route)
let blogsCache: BlogPost[] = [];
let cacheInitialized = false;

export async function initializeBlogs() {
  if (cacheInitialized) return;
  try {
    const response = await fetch('/api/blogs');
    if (response.ok) {
      const data = await response.json();
      blogsCache = data.blogs || [];
    }
    cacheInitialized = true;
  } catch (error) {
    console.error('Failed to initialize blogs:', error);
    cacheInitialized = true;
  }
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  await initializeBlogs();
  return blogsCache.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogById(id: string): Promise<BlogPost | undefined> {
  await initializeBlogs();
  return blogsCache.find(blog => blog.id === id);
}

export async function createBlog(blog: BlogPost): Promise<void> {
  await initializeBlogs();
  blogsCache.push(blog);
  await persistBlogs(blogsCache);
}

export async function updateBlog(id: string, updates: Partial<BlogPost>): Promise<void> {
  await initializeBlogs();
  const index = blogsCache.findIndex(blog => blog.id === id);
  if (index !== -1) {
    blogsCache[index] = { ...blogsCache[index], ...updates };
    await persistBlogs(blogsCache);
  }
}

export async function deleteBlog(id: string): Promise<void> {
  await initializeBlogs();
  blogsCache = blogsCache.filter(blog => blog.id !== id);
  await persistBlogs(blogsCache);
}

async function persistBlogs(blogs: BlogPost[]): Promise<void> {
  try {
    await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blogs }),
    });
  } catch (error) {
    console.error('Failed to persist blogs:', error);
  }
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function stripHtml(html: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}
