import { ArticleCardContainer, ArticleCardHeader } from './styles'

export function ArticleCard() {
  return (
    <ArticleCardContainer>
      <ArticleCardHeader>
        <h4>JavaScript data types and data structures</h4>
        <span>Há 1 dia</span>
      </ArticleCardHeader>

      <span>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </span>
    </ArticleCardContainer>
  )
}
