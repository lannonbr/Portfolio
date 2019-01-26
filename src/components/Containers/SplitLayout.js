import styled from 'styled-components'

const SplitLayout = styled.section`
  display: flex;
  margin-bottom: 16px;

  & > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export default SplitLayout
