'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import BlogEditor from '@/components/admin/BlogEditor';
import { getAllBlogs, calculateReadTime } from '@/lib/blogs';

export default function EditBlogPage() {
  const [blogData, setBlogData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    const adminPassword = localStorage.getItem('adminPassword');
    if (!adminPassword) {
      router.push('/admin');
      return;
    }
    setIsAuthorized(true);
    loadBlog();
  }, [id, router]);

  const loadBlog = async () => {
    try {
      const blogs = await getAllBlogs();
      const blog = blogs.find(b => b.id === id);
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
      const adminPassword = localStorage.getItem('adminPassword');
      const allBlogs = await fetch('/api/blogs').then(r => r.json()).then(d => d.blogs || []);
      
      const updatedBlogs = allBlogs.map((blog: any) =>
        blog.id === id
          ? {
              ...blog,
              ...data,
              readTime: calculateReadTime(data.content),
            }
          : blog
      );

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

  if (!blogData) {
    return <div className="flex items-center justify-center min-h-screen">Loading blog...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
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
