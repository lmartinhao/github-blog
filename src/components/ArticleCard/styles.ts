import styled from 'styled-components'

export const ArticleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 1.25rem;
  width: 26rem;
  height: 16.25rem;
  color: ${(props) => props.theme['blue-300']};

  background: ${(props) => props.theme['blue-700']};
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;

  .markdown {
    line-height: 160%;
    display: -webkit-box;
    -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const ArticleCardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;

  h4 {
    width: 17rem;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: #e7edf4;
  }

  span {
    width: 6rem;
    font-weight: 400;
    font-size: 14px;
    color: #7b96b2;
    line-height: 160%;
  }
`
