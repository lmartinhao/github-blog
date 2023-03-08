import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

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

interface ArticleInfoProps {
  author: string | undefined
  numberOfComments: number
  createdAt: string
}

export function ArticleInfo({
  author,
  numberOfComments,
  createdAt,
}: ArticleInfoProps) {
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
          <FontAwesomeIcon icon={faGithub as IconProp} /> <span>{author}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay as IconProp} />{' '}
          <span>{createdAt}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment as IconProp} />{' '}
          <span>{numberOfComments} comentários</span>
        </div>
      </ArticleStatsContainer>
    </ArticleInfoContainer>
  )
}
