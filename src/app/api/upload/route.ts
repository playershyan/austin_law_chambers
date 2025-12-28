import { NextRequest, NextResponse } from 'next/server'
import { uploadFile } from '@/lib/blob'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

const MAX_FILE_SIZE = 4.5 * 1024 * 1024 // 4.5MB (Next.js server upload limit)
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.' },
        { status: 400 }
      )
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 4.5MB.' },
        { status: 400 }
      )
    }

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const extension = file.name.split('.').pop()
    const filename = `${timestamp}-${randomString}.${extension}`

    // Check if Vercel Blob token is configured
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      // Use Vercel Blob for production
      const blobFilename = `blog-images/${filename}`
      const url = await uploadFile(file, blobFilename)
      return NextResponse.json({ url }, { status: 200 })
    } else {
      // Use local file storage for development
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      // Create uploads directory if it doesn't exist
      const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'blog-images')
      await mkdir(uploadDir, { recursive: true })

      // Save file locally
      const filepath = path.join(uploadDir, filename)
      await writeFile(filepath, buffer)

      // Return public URL
      const url = `/uploads/blog-images/${filename}`
      return NextResponse.json({ url }, { status: 200 })
    }
  } catch (error) {
    console.error('Error uploading image:', error)
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 })
  }
}
