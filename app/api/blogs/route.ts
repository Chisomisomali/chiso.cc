import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const BLOGS_FILE = path.join(process.cwd(), 'public', 'blogs-data.json');

function ensureBlogsFile() {
  const dir = path.dirname(BLOGS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(BLOGS_FILE)) {
    fs.writeFileSync(BLOGS_FILE, JSON.stringify({ blogs: [] }));
  }
}

export async function GET() {
  try {
    ensureBlogsFile();
    const data = fs.readFileSync(BLOGS_FILE, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading blogs:', error);
    return NextResponse.json({ blogs: [] });
  }
}

export async function POST(request: NextRequest) {
  try {
    ensureBlogsFile();
    const body = await request.json();
    fs.writeFileSync(BLOGS_FILE, JSON.stringify(body, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error writing blogs:', error);
    return NextResponse.json({ error: 'Failed to save blogs' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    ensureBlogsFile();
    const body = await request.json();
    const { id } = body;

    const data = JSON.parse(fs.readFileSync(BLOGS_FILE, 'utf-8'));
    data.blogs = data.blogs.filter((blog: any) => blog.id !== id);
    fs.writeFileSync(BLOGS_FILE, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
