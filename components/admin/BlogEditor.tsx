'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { calculateReadTime } from '@/lib/blogs';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface BlogEditorProps {
  initialData?: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    image?: string;
  };
  onSave: (data: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    image?: string;
  }) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function BlogEditor({
  initialData,
  onSave,
  onCancel,
  isLoading,
}: BlogEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [category, setCategory] = useState(initialData?.category || 'Technology');
  const [image, setImage] = useState(initialData?.image || '');
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const readTime = calculateReadTime(content);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      setImage(data.url);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!title.trim() || !excerpt.trim() || !content.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    await onSave({
      title,
      excerpt,
      content,
      category,
      image: image || undefined,
    });
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['clean'],
    ],
  };

  return (
    <div className="space-y-6">
      <Card className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10">
        <CardHeader>
          <CardTitle className="text-foreground">Blog Editor</CardTitle>
          <CardDescription className="text-muted-foreground">Create or edit your blog post with a Word-like experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="backdrop-blur-sm bg-white/30 dark:bg-white/5 border border-white/30 text-foreground"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Excerpt</label>
            <Textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief summary of your blog post"
              className="backdrop-blur-sm bg-white/30 dark:bg-white/5 border border-white/30 h-20 text-foreground"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-md backdrop-blur-sm bg-white/30 dark:bg-white/5 border border-white/30 dark:border-white/10 text-foreground"
            >
              <option>Technology</option>
              <option>Personal</option>
              <option>Networking</option>
              <option>Linux</option>
              <option>Cloud</option>
              <option>Home Lab</option>
              <option>Other</option>
            </select>
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Featured Image</label>
            <div className="flex gap-4">
              <Button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                variant="outline"
              >
                {uploading ? 'Uploading...' : 'Upload Image'}
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              {image && (
                <div className="relative w-24 h-24">
                  <img
                    src={image}
                    alt="Featured"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    onClick={() => setImage('')}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Rich Text Editor */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-foreground">Content</label>
              <span className="text-xs text-muted-foreground">
                {content.split(/\s+/).length} words • {readTime} min read
              </span>
            </div>
            <div className="bg-background rounded-lg border border-white/30 dark:border-white/10 prose prose-invert max-w-none">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                placeholder="Start writing your blog post..."
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              onClick={handleSave}
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? 'Publishing...' : 'Publish Blog'}
            </Button>
            <Button
              onClick={onCancel}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
