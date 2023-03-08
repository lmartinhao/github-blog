import { ArticleCardContainer, ArticleCardHeader } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  function handleClickArticleCard() {
    navigate(`/articles/${number}`)
  }

  return (
    <ArticleCardContainer onClick={handleClickArticleCard}>
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
