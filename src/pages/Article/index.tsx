import { ArticleInfo } from '../../components/ArticleInfo'
import { Header } from '../../components/Header'
import { ArticleArea, ArticleContainer } from './styles'

export function Article() {
  return (
    <ArticleContainer>
      <Header />
      <ArticleInfo />

      <ArticleArea>
        <h1>Article</h1>
      </ArticleArea>
    </ArticleContainer>
  )
}
