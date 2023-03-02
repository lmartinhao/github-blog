import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faUserGroup,
  faBuilding,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

import {
  ArticleInfoContainer,
  ArticleStatsContainer,
  CardLinks,
  GithubLink,
} from './styles'

export function ArticleInfo() {
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
          <span>lmartinhao</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faBuilding as IconProp} />{' '}
          <span>Freelancer</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faUserGroup as IconProp} />{' '}
          <span>15 seguidores</span>
        </div>
      </ArticleStatsContainer>
    </ArticleInfoContainer>
  )
}
