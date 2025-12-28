import { put, del, list } from '@vercel/blob'

/**
 * Upload a file to Vercel Blob Storage
 * @param file The file to upload
 * @param filename The name to save the file as
 * @returns The URL of the uploaded file
 */
export async function uploadFile(file: File, filename: string): Promise<string> {
  try {
    // Vercel SDK automatically reads BLOB_READ_WRITE_TOKEN from environment
    const blob = await put(filename, file, {
      access: 'public',
    })

    return blob.url
  } catch (error) {
    console.error('Error uploading file to blob storage:', error)
    throw new Error('Failed to upload file')
  }
}

/**
 * Delete a file from Vercel Blob Storage
 * @param url The URL of the file to delete
 */
export async function deleteFile(url: string): Promise<void> {
  try {
    // Vercel SDK automatically reads BLOB_READ_WRITE_TOKEN from environment
    await del(url)
  } catch (error) {
    console.error('Error deleting file from blob storage:', error)
    throw new Error('Failed to delete file')
  }
}

/**
 * List all files in Vercel Blob Storage
 */
export async function listFiles() {
  try {
    // Vercel SDK automatically reads BLOB_READ_WRITE_TOKEN from environment
    const { blobs } = await list()

    return blobs
  } catch (error) {
    console.error('Error listing files from blob storage:', error)
    throw new Error('Failed to list files')
  }
}
