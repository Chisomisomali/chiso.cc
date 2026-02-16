'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import BlogEditor from '@/components/admin/BlogEditor';
import { calculateReadTime } from '@/lib/blogs';
import { Loader2 } from 'lucide-react';

export default function NewBlogPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { isAuthenticated, loading } = useAdminAuth();

  const handleSave = async (data: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    image?: string;
  }) => {
    setIsLoading(true);
    try {
      const newBlog = {
        id: Date.now().toString(),
        ...data,
        date: new Date().toISOString(),
        readTime: calculateReadTime(data.content),
      };

      const allBlogs = await fetch('/api/blogs').then(r => r.json()).then(d => d.blogs || []);
      const updatedBlogs = [...allBlogs, newBlog];

      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blogs: updatedBlogs }),
      });

      if (!response.ok) throw new Error('Failed to save blog');

      router.push('/admin/blogs');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog');
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 p-6">
      <div className="max-w-4xl mx-auto">
        <BlogEditor
          onSave={handleSave}
          onCancel={() => router.push('/admin/blogs')}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
