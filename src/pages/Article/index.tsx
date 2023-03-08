import { useParams } from 'react-router-dom'
import { ArticleInfo } from '../../components/ArticleInfo'
import { Header } from '../../components/Header'

import { ArticleArea, ArticleContainer } from './styles'

export function Article() {
  const { issueNumber } = useParams()
  return (
    <ArticleContainer>
      <Header />
      <ArticleInfo />

      <ArticleArea>Esse é o artigo {issueNumber}</ArticleArea>
    </ArticleContainer>
  )
}
