import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
  id: string
  title: string
  description: string
  date: string
  thumbnail?: string
  tags: string[]
  content?: string
}

export class PostsManager {
  private static postsDirectory = path.join(process.cwd(), 'content/posts')

  static getAllPosts(): Post[] {
    const postFiles = fs.readdirSync(this.postsDirectory)
    
    return postFiles.map((fileName) => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(this.postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        id,
        title: data.title,
        description: data.description,
        date: data.date,
        thumbnail: data.thumbnail,
        tags: data.tags || []
      }
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  static getPostsByTag(tag: string): Post[] {
    return this.getAllPosts().filter(post => 
      post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    )
  }

  static getPostById(id: string): (Post & { content: string }) | null {
    const postPath = path.join(this.postsDirectory, `${id}.md`)
    
    // 檢查檔案是否存在
    if (!fs.existsSync(postPath)) {
      return null
    }
    
    try {
      const fileContents = fs.readFileSync(postPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        id,
        title: data.title,
        description: data.description,
        date: data.date,
        thumbnail: data.thumbnail,
        tags: data.tags || [],
        content
      }
    } catch (error) {
      console.error(`Error reading post file: ${postPath}`, error)
      return null
    }
  }

  static getAllTags(): { name: string; count: number }[] {
    const posts = this.getAllPosts()
    const tags = Array.from(new Set(posts.flatMap(post => post.tags)))
    return tags.map(tag => ({
      name: tag,
      count: posts.filter(post => post.tags.includes(tag)).length
    })).sort((a, b) => b.count - a.count)
  }

  static getPostsByMonth(): { [key: string]: Post[] } {
    const posts = this.getAllPosts()
    return posts.reduce((acc, post) => {
      const date = new Date(post.date)
      const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      if (!acc[monthYear]) acc[monthYear] = []
      acc[monthYear].push(post)
      return acc
    }, {} as { [key: string]: Post[] })
  }
} 