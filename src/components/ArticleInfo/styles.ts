import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ArticleInfoContainer = styled.div`
  width: 54rem;
  height: 10.5rem;
  position: absolute;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  left: calc(50% - 864px / 2);
  top: 13rem;

  background: ${(props) => props.theme['blue-800']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;

  h2 {
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['blue-100']};
  }
`

export const CardLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(54rem - 5rem);
  justify-content: space-between;
  align-items: center;
`

export const GithubLink = styled(Link)`
  color: ${(props) => props.theme.blue};
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 160%;
`

export const ArticleStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  color: ${(props) => props.theme['blue-200']};

  svg {
    color: ${(props) => props.theme['blue-500']};
    margin-right: 0.3rem;
  }
`
