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

  async function loadArticles() {
    const response: Response = await fetch(
      'https://api.github.com/search/issues?q=boas%20pr%C3%A1ticas%20repo:lmartinhao/github-blog',
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_KEY}`,
        },
      },
    )
    const data = await response.json()
    setArticles({
      total_count: data.total_count,
      items: data.items,
    })
  }

  useEffect(() => {
    loadArticles().catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <ArticlesContext.Provider value={{ articles }}>
      {children}
    </ArticlesContext.Provider>
  )
}
