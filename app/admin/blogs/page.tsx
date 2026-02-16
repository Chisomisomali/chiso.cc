'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BlogPost, getAllBlogs, deleteBlog } from '@/lib/blogs';

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const adminPassword = localStorage.getItem('adminPassword');
    if (!adminPassword) {
      router.push('/admin');
      return;
    }

    loadBlogs();
  }, [router]);

  const loadBlogs = async () => {
    try {
      const allBlogs = await getAllBlogs();
      setBlogs(allBlogs);
    } catch (error) {
      console.error('Failed to load blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    setDeleting(id);
    try {
      const adminPassword = localStorage.getItem('adminPassword');
      await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${adminPassword}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          blogs: blogs.filter(b => b.id !== id),
        }),
      });
      setBlogs(blogs.filter(b => b.id !== id));
    } catch (error) {
      console.error('Failed to delete blog:', error);
      alert('Failed to delete blog');
    } finally {
      setDeleting(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminPassword');
    router.push('/admin');
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Blog Management</h1>
            <p className="text-gray-400">Manage your published blog posts</p>
          </div>
          <div className="flex gap-4">
            <Link href="/admin/blogs/new">
              <Button>New Blog</Button>
            </Link>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {blogs.length === 0 ? (
            <Card className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border-white/30 dark:border-white/10">
              <CardContent className="py-12 text-center">
                <p className="text-gray-400 mb-4">No blogs published yet</p>
                <Link href="/admin/blogs/new">
                  <Button>Create Your First Blog</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            blogs.map((blog) => (
              <Card
                key={blog.id}
                className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border-white/30 dark:border-white/10 hover:bg-white/30 transition-colors"
              >
                <CardContent className="py-6">
                  <div className="flex gap-4">
                    {blog.image && (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                      <p className="text-gray-400 mb-3 line-clamp-2">{blog.excerpt}</p>
                      <div className="flex gap-4 text-sm text-gray-400 mb-4">
                        <span>{new Date(blog.date).toLocaleDateString()}</span>
                        <span>{blog.readTime} min read</span>
                        <span className="bg-white/20 px-2 py-1 rounded">{blog.category}</span>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/admin/blogs/${blog.id}/edit`}>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(blog.id)}
                          disabled={deleting === blog.id}
                        >
                          {deleting === blog.id ? 'Deleting...' : 'Delete'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
