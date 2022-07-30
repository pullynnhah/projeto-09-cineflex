import styled from "styled-components";

const Button = styled.button`
  font-size: 18px;
  line-height: 21px;

  padding: 8px 16px;
  color: #fff;
  text-align: center;
  background: #e8833a;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    transform: translate(2px);
    background: #e7a87b;
  }
`;

export default Button;
