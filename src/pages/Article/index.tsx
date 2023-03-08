import { useParams } from 'react-router-dom'
import { ArticleInfo } from '../../components/ArticleInfo'
import { Header } from '../../components/Header'
import ReactMarkdown from 'react-markdown'

import { ArticleArea, ArticleContainer } from './styles'
import { useContext, useEffect } from 'react'
import { ArticlesContext } from '../../contexts/ArticlesContext'

export function Article() {
  const { fetchArticle, selectedArticle } = useContext(ArticlesContext)
  const { issueNumber } = useParams<{ issueNumber: string }>()

  useEffect(() => {
    if (issueNumber) {
      fetchArticle(Number(issueNumber)).catch((error) => {
        console.error(error)
      })
    }
  }, [issueNumber, fetchArticle])

  return (
    <ArticleContainer>
      <Header />
      <ArticleInfo
        author={selectedArticle.user?.login}
        numberOfComments={selectedArticle.comments}
        createdAt={selectedArticle.created_at}
      />

      <ArticleArea>
        <h1>{selectedArticle.title}</h1>
        <ReactMarkdown>{selectedArticle.body}</ReactMarkdown>
      </ArticleArea>
    </ArticleContainer>
  )
}
