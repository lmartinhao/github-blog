import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faUserGroup, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

import {
  GithubLink,
  ProfileContainer,
  ProfileHeader,
  ProfileInfo,
  ProfileStatsContainer,
} from './styles'

import BlankProfile from '../../assets/blank-profile.webp'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={BlankProfile} alt="" />

      <ProfileInfo>
        <ProfileHeader>
          <h2>Lola Martinhão</h2>
          <GithubLink to={'https://github.com/lmartinhao'} target="_blank">
            <span>Github</span>{' '}
            <FontAwesomeIcon icon={faArrowAltCircleRight as IconProp} />
          </GithubLink>
        </ProfileHeader>
        <div>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
          porta nunc. Proin eu nisl molestie, aliquet turpis ac, vulputate
          velit. Nam faucibus neque massa, eu lobortis velit rhoncus vel. Fusce
          eu consequat orci. Nulla nec ultricies nisl.
        </div>
        <ProfileStatsContainer>
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
        </ProfileStatsContainer>
      </ProfileInfo>
    </ProfileContainer>
  )
}
