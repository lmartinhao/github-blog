import styled from 'styled-components'

export const ArticleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 416px;
  height: 260px;

  background: #112131;
  border-radius: 10px;
  padding: 2rem;

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
  display: flex;
  flex-direction: row;
  gap: 1rem;

  h4 {
    max-width: 17.688rem;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: #e7edf4;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    color: #7b96b2;
    line-height: 160%;
  }
`
