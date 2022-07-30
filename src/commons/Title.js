import styled from "styled-components";

const Title = styled.div`
  height: 91px;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    padding-top: 10px;
    font-size: 24px;
    line-height: 28px;
    font-weight: ${props => props.weight};
    color: ${props => props.color};
  }
`;

export default Title;
