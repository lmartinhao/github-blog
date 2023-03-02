import { ArticleInfo } from '../../components/ArticleInfo'
import { Header } from '../../components/Header'
import { ArticleContainer } from './styles'

export function Article() {
  return (
    <ArticleContainer>
      <Header />
      <ArticleInfo />
      <h1>Article</h1>
    </ArticleContainer>
  )
}
