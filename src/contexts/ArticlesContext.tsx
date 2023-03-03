import { createContext, ReactNode, useEffect, useState } from 'react'

interface ArticleData {
  id: number
  title: string
  body: string
  user: {
    login: string
  }
  comments: number
  created_at: string
}

interface Article {
  total_count: number
  items: ArticleData[]
}

interface ArticleContextType {
  articles: Article
  fetchArticles: (query?: string) => Promise<void>
}

interface ArticlesProviderProps {
  children: ReactNode
}

export const ArticlesContext = createContext({} as ArticleContextType)

export function ArticlesProvider({ children }: ArticlesProviderProps) {
  const [articles, setArticles] = useState<Article>({
    items: [],
    total_count: 0,
  })

  async function fetchArticles(query?: string) {
    let response: Response
    if (query) {
      response = await fetch(
        `https://api.github.com/search/issues?q=repo:lmartinhao/github-blog ${query}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_KEY}`,
          },
        },
      )
    } else {
      response = await fetch(
        'https://api.github.com/search/issues?q=repo:lmartinhao/github-blog',
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_KEY}`,
          },
        },
      )
    }
    const data = await response.json()
    setArticles({
      total_count: data.total_count,
      items: data.items,
    })
  }

  useEffect(() => {
    fetchArticles().catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <ArticlesContext.Provider value={{ articles, fetchArticles }}>
      {children}
    </ArticlesContext.Provider>
  )
}
