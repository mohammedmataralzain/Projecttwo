import styled from "styled-components";
import bannerBoard from "../../images/Bannerboard.png";
export const StyleTopSection = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px 10px;
  margin: 10px 0;
  ul {
    li {
      color: #505050;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
       width: 280px;
      height: 40px;
      border-radius: 6px;
      line-height: 20px;
      padding: 10px 0 0 20px;
      &:hover {
      background-color: #E5F1FF;

      }
    }
    li:first-child {
      color: #1c1c1c;
      font-weight: 500;
      background-color: #E5F1FF;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
  .bannerBoard {
    width: 759px;
    height: 373px;
    background-image: url(${bannerBoard});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .title {
      padding: 40px 30px;
      h2 {
        font-weight: 400;
        font-size: 28px;
        line-height: 34px;
        @media (max-width: 700px) {
          font-size: 18px;
          line-height: 22px;
        }
      }
      h1 {
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: #1c1c1c;
        @media (max-width: 700px) {
          font-size: 18px;
          line-height: 22px;
        }
      }

      button {
        background: #ffffff;
        border-radius: 6px;
        color: #1c1c1c;
        border: none;
        margin-top: 15px;
      }
    }
    @media (max-width: 991px) {
      min-width: 365px;
      height: 182.22px;
    }
  }
  .col3 {
    .detalis{
      background-color: #E3F0FF;
      padding: 10px;
      border-radius: 6px;
    }
    .avatar {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img {
        width: 64px;
        height: 64px;
        background: #91b1e7;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 50%;
      }
      p {
        width: 88px;
        height: 38px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-left: 10px;
      }
    }

    button {
      border: none;
      border-radius: 6px;
      width: 180px;
      height: 30px;
      margin-bottom: 5px;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

export const CaptionStyle = styled.div`
  margin-top: 10px;
  width: 200px;
  height: 95px;
  background: ${({ background }) => background};
  border-radius: 6px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;

  p {
    padding: 20px 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    width: 165px;
    height: 57px;
    color: #ffffff;
  }
`;
