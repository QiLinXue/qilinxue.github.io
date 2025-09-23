export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  image: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'laugavegur-trail-2025',
    title: 'TBA',
    excerpt: 'TBA',
    content: `# The Laugavegur Trail

TBA`,
    date: 'August 15, 2025',
    readTime: '8 min read',
    image: '/laugavegur.jpg',
    tags: ['TBA']
  }
]
