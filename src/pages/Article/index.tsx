import { ArticleInfo } from '../../components/ArticleInfo'
import { Header } from '../../components/Header'
import { MarkdownToHTML } from '../../components/MarkdownText'
import { ArticleArea, ArticleContainer } from './styles'

export function Article() {
  return (
    <ArticleContainer>
      <Header />
      <ArticleInfo />

      <ArticleArea>
        <MarkdownToHTML />
      </ArticleArea>
    </ArticleContainer>
  )
}
