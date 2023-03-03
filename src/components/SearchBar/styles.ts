import styled from 'styled-components'

export const SearchBarContainer = styled.form`
  input {
    width: 100%;
    height: 50px;
    padding: 12px 16px;
    margin-bottom: 3rem;

    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['blue-200']};

    border: 1px solid #1c2f41;
    border-radius: 6px;
  }
`
