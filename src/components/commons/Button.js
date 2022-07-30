import styled from "styled-components";

const Button = styled.button`
  width: 60vw;
  height: 42px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  line-height: 21px;

  color: #fff;
  background: #e8833a;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    transform: translateY(2px);
    background: #e7a87b;
  }
`;

export default Button;
