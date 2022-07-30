import styled from "styled-components";

const Footer = styled.footer`
  width: 100vw;
  height: 117px;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  gap: 14px;

  background: #dfe6ed;
  border-top: 1px solid #9eadba;
  padding: 0 10px;

  .image-container {
    width: 64px;
    height: 89px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  img {
    width: 48px;
    height: 72px;
  }

  p {
    color: #293845;

    font-size: 26px;
    line-height: 30px;
  }
`;

export default Footer;
