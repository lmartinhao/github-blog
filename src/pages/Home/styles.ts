import styled from 'styled-components'

export const HomeContainer = styled.div``

export const ArticlesContainer = styled.div`
  width: 54rem;
  margin: 0 auto;
`

export const ArticlesContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.75rem;
`
export const ArticlesArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  div + div {
    margin-bottom: 2rem;
  }
`
