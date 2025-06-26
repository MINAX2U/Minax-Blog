export interface BuroguruConfig {
  // Site Settings
  site: {
    name: "MINAX"
    description: "My_blog"
    url: "https://minax-blog.vercel.app/"
    favicon?: string
  }
  
  // Author Settings
  author: {
    name: "MINAX"
    bio: "A student"
    avatar: string
    email?: "ethanlai588@proton.me"
    social: {
      github?: "<https://github.com/MINAX2U>"
      twitter?: string
      linkedin?: string
      notion?: string
      website?: string
    }
  }
  
  // Appearance
  appearance: {
    // Primary font family
    fontFamily: 'serif' | 'sans' | 'mono'
    // Custom font from Google Fonts
    customFont?: string
    // Primary color scheme
    primaryColor: '240 100% 75%'
    // Secondary color
    secondaryColor?: '245 93% 67%'
    // Logo/Brand image
    logo?: string
  }
  
  // Blog Settings
  blog: {
    // Posts per page
    postsPerPage: 10
    // Show excerpt on post list
    showExcerpt: true
    // Show tags
    showTags: true
    // Default thumbnail for posts without image
    defaultThumbnail?: string
  }
  

  
  // Homepage
  homepage: {
    // Hero section
    hero: {
      title: "Minax"
      description: "Blog"
      primaryButton: {
        text: "開始閱讀",
        href: "/posts/get-started"
      }
      secondaryButton: {
        text: "了解更多",
        href: "/about"
      }
    }
    // Recent posts section
    recentPosts: {
      title: "最新文章"
      viewAllText: "查看所有文章"
      count: 3
    }
  }
  
  // Footer
  footer: {
    // Custom footer text
    text?: "© 2025 MINAX"
    // Show "Built with Buroguru" link
    showBuiltWith: true
    // Additional footer links
    links?: Array<{
      name: "隱私政策"
      href: "/privacy"
    }>
  }
}

// Default configuration
export const defaultConfig: BuroguruConfig = {
  site: {
    name: "Buroguru",
    description: "A modern blog framework that transforms your Notion workspace into a beautiful blog",
    url: "https://buroguru.zudo.cc"
  },
  
  author: {
    name: "Your Name",
    bio: "Welcome to my blog! I write about technology, life, and everything in between.",
    avatar: "/images/avatar.png",
    social: {
      github: "https://github.com/yourusername",
      notion: "https://notion.so/yourusername"
    }
  },
  
  appearance: {
    fontFamily: 'serif',
    primaryColor: '222.2 84% 4.9%', // Default shadcn primary
    logo: "/images/logo.png"
  },
  
  blog: {
    postsPerPage: 10,
    showExcerpt: true,
    showTags: true
  },
  
  homepage: {
    hero: {
      title: "Your Blog Title",
      description: "A brief description of your blog",
      primaryButton: {
        text: "Get Started",
        href: "/posts/get-started"
      },
      secondaryButton: {
        text: "About",
        href: "/about"
      }
    },
    recentPosts: {
      title: "Recent Posts",
      viewAllText: "View all posts",
      count: 3
    }
  },
  
  footer: {
    text: "Built with ❤️",
    showBuiltWith: true
  }
}

// User's custom configuration
const config: BuroguruConfig = {
  site: {
    name: "Buroguru",
    description: "A modern blog framework that transforms your Notion workspace into a beautiful blog",
    url: "https://buroguru.zudo.cc"
  },
  
  author: {
    name: "Owen Wu",
    bio: "Buroguru is a modern blog framework that seamlessly transforms your Notion workspace into a beautiful, fast-loading blog. Write in Notion, publish everywhere.",
    avatar: "/images/Buroguru.png",
    email: "wusandwitch@gmail.com",
    social: {
      github: "https://github.com/WuSandWitch/Buroguru",
      notion: "https://buroguru.notion.site",
      website: "https://WuSandWitch.zudo.cc"
    }
  },
  
  appearance: {
    fontFamily: 'serif',
    primaryColor: '222.2 84% 4.9%',
    secondaryColor: '210 40% 96%',
    logo: '/images/Buroguru.png'
  },
  
  blog: {
    postsPerPage: 10,
    showExcerpt: true,
    showTags: true
  },
  
  homepage: {
    hero: {
      title: "Buroguru",
      description: "Documenting blog using Notion as CMS.",
      primaryButton: {
        text: "Get Started",
        href: "/posts/get-started-en"
      },
      secondaryButton: {
        text: "What is Buroguru?",
        href: "/posts/intro"
      }
    },
    recentPosts: {
      title: "Recent Posts",
      viewAllText: "View all posts",
      count: 3
    }
  },
  
  footer: {
    text: "WuSandWitch",
    showBuiltWith: true,
    links: [
      { name: "WuSandWitch", href: "https://WuSandWitch.zudo.cc" }
    ]
  }
}

export default config 