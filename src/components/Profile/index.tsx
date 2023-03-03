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

import { useEffect, useState } from 'react'

interface ProfileData {
  login: string
  name: string
  bio: string
  avatar_url: string
  html_url: string
  followers: number
  company: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null)

  async function loadProfileInfo() {
    const response: Response = await fetch(
      'https://api.github.com/users/lmartinhao',
    )
    const data: ProfileData = await response.json()

    console.log(data)
    setProfile(data)
  }

  useEffect(() => {
    loadProfileInfo().catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <ProfileContainer>
      <img src={profile?.avatar_url} alt="" />

      <ProfileInfo>
        <ProfileHeader>
          <h2>{profile?.name}</h2>
          <GithubLink to={profile?.html_url || ''} target="_blank">
            <span>Github</span>{' '}
            <FontAwesomeIcon icon={faArrowAltCircleRight as IconProp} />
          </GithubLink>
        </ProfileHeader>
        <div> {profile?.bio}</div>
        <ProfileStatsContainer>
          <div>
            <FontAwesomeIcon icon={faGithub as IconProp} />{' '}
            <span>{profile?.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding as IconProp} />{' '}
            <span>{profile?.company}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup as IconProp} />{' '}
            <span>{profile?.followers} seguidores</span>
          </div>
        </ProfileStatsContainer>
      </ProfileInfo>
    </ProfileContainer>
  )
}
