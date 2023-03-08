import { ArticleCardContainer, ArticleCardHeader } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'

interface ArticleCardProps {
  title: string
  body: string
  createdAt: string
  number: number
}

export function ArticleCard({
  title,
  body,
  createdAt,
  number,
}: ArticleCardProps) {
  return (
    <ArticleCardContainer to={`/articles/${number}`}>
      <ArticleCardHeader>
        <h4>{title}</h4>
        <span>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </ArticleCardHeader>
      <ReactMarkdown className="markdown">{body}</ReactMarkdown>
    </ArticleCardContainer>
  )
}
