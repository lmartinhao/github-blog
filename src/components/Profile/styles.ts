import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 54rem;
  height: 13.25rem;
  position: absolute;

  box-sizing: border-box;
  display: flex;
  gap: 2rem;

  left: calc(50% - 864px / 2);
  top: 13rem;

  background: ${(props) => props.theme['blue-800']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['blue-100']};
  }

  img {
    width: 9.25rem;
    height: 148px;
    border-radius: 8px;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProfileHeader = styled.div`
  width: calc(54rem - 2rem - 5rem - 9.25rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GithubLink = styled.div`
  color: ${(props) => props.theme.blue};
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 160%;
`

export const ProfileStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  color: ${(props) => props.theme['blue-200']};

  svg {
    color: ${(props) => props.theme['blue-500']};
  }
`
