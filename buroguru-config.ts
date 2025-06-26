export interface BuroguruConfig {
  // Site Settings
  site: {
    name: string
    description: string
    url: string
    favicon?: string
  }
  
  // Author Settings
  author: {
    name: string
    bio: string
    avatar: string
    email?: string
    social: {
      github?: string
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
    primaryColor: string
    // Secondary color
    secondaryColor?: string
    // Logo/Brand image
    logo?: string
  }
  
  // Blog Settings
  blog: {
    // Posts per page
    postsPerPage: number
    // Show excerpt on post list
    showExcerpt: boolean
    // Show tags
    showTags: boolean
    // Default thumbnail for posts without image
    defaultThumbnail?: string
  }
  

  
  // Homepage
  homepage: {
    // Hero section
    hero: {
      title: string
      description: string
      primaryButton: {
        text: string
        href: string
      }
      secondaryButton: {
        text: string
        href: string
      }
    }
    // Recent posts section
    recentPosts: {
      title: string
      viewAllText: string
      count: number
    }
  }
  
  // Footer
  footer: {
    // Custom footer text
    text?: string
    // Show "Built with Buroguru" link
    showBuiltWith: boolean
    // Additional footer links
    links?: Array<{
      name: string
      href: string
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
    name: "Minax",
    description: "Blog",
    url: "https://google.com"
  },
  
  author: {
    name: "MINAX",
    bio: "A Student's Blog",
    avatar: "/images/Buroguru.png",
    email: "ethanlai588@proton.me",
    social: {
      github: "https://github.com/MINAX2U",
      notion: "https://google.com",
      website: "https://google.com"
    }
  },
  
  appearance: {
    fontFamily: 'serif',
    primaryColor: '240 100% 75%',
    secondaryColor: '245 93% 67%',
    logo: '/images/Buroguru.png'
  },
  
  blog: {
    postsPerPage: 10,
    showExcerpt: true,
    showTags: true
  },
  
  homepage: {
    hero: {
      title: "Minax",
      description: "My Blog",
      primaryButton: {
        text: "Start Reading",
        href: "/posts/get-started"
      },
      secondaryButton: {
        text: "Know More",
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
    text: "Minax",
    showBuiltWith: true,
    links: [
      { name: "Minax", href: "https://google.com" }
    ]
  }
}

export default config 