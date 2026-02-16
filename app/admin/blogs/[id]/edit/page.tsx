'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { calculateReadTime, BlogPost } from '@/lib/blogs';
import { Loader2 } from 'lucide-react';

export default function EditBlogPage() {
  const [blogData, setBlogData] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const { isAuthenticated, loading: authLoading } = useAdminAuth();

  useEffect(() => {
    if (isAuthenticated) {
      loadBlog();
    }
  }, [id, isAuthenticated]);

  const loadBlog = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      const blog = data.blogs.find((b: BlogPost) => b.id === id);
      if (blog) {
        setBlogData(blog);
      } else {
        router.push('/admin/blogs');
      }
    } catch (error) {
      console.error('Failed to load blog:', error);
      router.push('/admin/blogs');
    }
  };

  const handleSave = async (data: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    image?: string;
  }) => {
    setIsLoading(true);
    try {
      console.log("[v0] Updating blog", id, "with data:", data);
      
      const response = await fetch('/api/blogs');
      const json = await response.json();
      const allBlogs = json.blogs || [];
      
      console.log("[v0] Fetched existing blogs, count:", allBlogs.length);
      
      const updatedBlogs = allBlogs.map((blog: BlogPost) =>
        blog.id === id
          ? {
              ...blog,
              ...data,
              readTime: calculateReadTime(data.content),
            }
          : blog
      );

      console.log("[v0] Updated blogs array, new count:", updatedBlogs.length);

      const saveResponse = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blogs: updatedBlogs }),
      });

      console.log("[v0] Save response status:", saveResponse.status);

      if (!saveResponse.ok) {
        const errorText = await saveResponse.text();
        console.error("[v0] Save error response:", errorText);
        throw new Error('Failed to save blog');
      }

      const saveResult = await saveResponse.json();
      console.log("[v0] Save successful:", saveResult);

      alert('Blog updated successfully!');
      router.push('/admin/blogs');
    } catch (error) {
      console.error("[v0] Error saving blog:", error);
      alert(`Failed to save blog: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (!blogData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 p-6">
      <div className="max-w-4xl mx-auto">
        <BlogEditor
          initialData={blogData}
          onSave={handleSave}
          onCancel={() => router.push('/admin/blogs')}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
