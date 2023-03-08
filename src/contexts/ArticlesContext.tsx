import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { AxiosResponse } from 'axios'

interface ArticleData {
  id?: number
  title: string
  body: string
  user?: {
    login: string
  }
  comments: number
  created_at: string
  number: number
}

interface Article {
  total_count: number
  items: ArticleData[]
}

interface ArticleContextType {
  articles: Article
  selectedArticle: ArticleData
  fetchArticles: (query?: string) => Promise<void>
  fetchArticle: (issueNumber: number) => Promise<void>
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
  const [selectedArticle, setSelectedArticle] = useState<ArticleData>({
    title: '',
    body: '',
    comments: 0,
    created_at: new Date().toISOString(),
    number: 0,
  })

  async function fetchArticle(issueNumber: number) {
    const response = await api.get(
      `repos/lmartinhao/github-blog/issues/${issueNumber}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_KEY}`,
        },
      },
    )
    const data = response.data
    setSelectedArticle(data)
  }

  async function fetchArticles(query?: string) {
    let response: AxiosResponse
    try {
      if (query) {
        response = await api.get(
          `search/issues?q=repo:lmartinhao/github-blog ${query}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_KEY}`,
            },
          },
        )
      } else {
        response = await api.get(
          'search/issues?q=repo:lmartinhao/github-blog',
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_KEY}`,
            },
          },
        )
      }
      const data = response.data
      setArticles({
        total_count: data.total_count,
        items: data.items,
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchArticles().catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <ArticlesContext.Provider
      value={{ articles, selectedArticle, fetchArticles, fetchArticle }}
    >
      {children}
    </ArticlesContext.Provider>
  )
}
