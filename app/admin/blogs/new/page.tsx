'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';
import { createBlog, calculateReadTime } from '@/lib/blogs';

export default function NewBlogPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const adminPassword = localStorage.getItem('adminPassword');
    if (!adminPassword) {
      router.push('/admin');
      return;
    }
    setIsAuthorized(true);
  }, [router]);

  const handleSave = async (data: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    image?: string;
  }) => {
    setIsLoading(true);
    try {
      const adminPassword = localStorage.getItem('adminPassword');
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
          'Authorization': `Bearer ${adminPassword}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blogs: updatedBlogs }),
      });

      if (!response.ok) throw new Error('Failed to save blog');

      router.push('/admin/blogs');
      router.refresh();
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthorized) {
    return <div className="flex items-center justify-center min-h-screen">Checking authorization...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
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
