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
    publisher?: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/blogs');
      const json = await response.json();
      const allBlogs = json.blogs || [];

      const updatedBlogs = allBlogs.map((blog: BlogPost) =>
        blog.id === id
          ? {
              ...blog,
              ...data,
              readTime: calculateReadTime(data.content),
            }
          : blog
      );

      const saveResponse = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blogs: updatedBlogs }),
      });

      if (!saveResponse.ok) {
        const errorText = await saveResponse.text();
        throw new Error('Failed to save blog');
      }

      const saveResult = await saveResponse.json();

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
