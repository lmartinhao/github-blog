import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import {
  faCalendarDay,
  faArrowLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

import {
  ArticleInfoContainer,
  ArticleStatsContainer,
  CardLinks,
  GithubLink,
} from './styles'
import { useContext } from 'react'
import { ArticlesContext } from '../../contexts/ArticlesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function ArticleInfo() {
  const { selectedArticle } = useContext(ArticlesContext)

  const postDate = new Date(selectedArticle.created_at)

  return (
    <ArticleInfoContainer>
      <CardLinks>
        <GithubLink to={'/'}>
          <FontAwesomeIcon icon={faArrowLeft as IconProp} /> <span>Voltar</span>
        </GithubLink>
        <GithubLink to={'https://github.com/lmartinhao'} target="_blank">
          <span>Github</span>{' '}
          <FontAwesomeIcon icon={faArrowAltCircleRight as IconProp} />
        </GithubLink>
      </CardLinks>
      <h2>JavaScript data types and data structures</h2>
      <ArticleStatsContainer>
        <div>
          <FontAwesomeIcon icon={faGithub as IconProp} />{' '}
          <span>{selectedArticle.user?.login}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay as IconProp} />{' '}
          <span>
            {formatDistanceToNow(postDate, {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment as IconProp} />{' '}
          <span>{selectedArticle.comments} comentários</span>
        </div>
      </ArticleStatsContainer>
    </ArticleInfoContainer>
  )
}
