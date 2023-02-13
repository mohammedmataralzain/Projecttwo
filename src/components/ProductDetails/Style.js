import styled from "styled-components";

export const StyleDetails = styled.div`
margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 580px;
  margin-top: 20px;
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  .col1 {
    .bigImg {
      img {
        background: #ffffff;
        width: 330px;
        height: 330px;
        border: 1px solid #e3e8ee;
        border-radius: 6px;
      }
    }
    .imgs {
      margin-top: 10px;
      img {
        border: 1px solid #e3e8ee;
        border-radius: 4px;
        margin-left: 5px;
      }
    }
  }
  .col2 {
    p:first-child {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.2px;
      color: #00b517;
    }
    div:nth-child(2) {
      width: 384px;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.2px;
      color: #1c1c1c;
      margin: 10px 0;
    }
      ul {
        display: flex;
        align-items: center;
        gap: 25px;
        li:first-child {
          list-style: none;
          color: #ff9017;
        }
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          list-style: circle;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #787a80;
          .icon {
            width: 20px;
            height: 20px;
            color: #8b96a5;
          }
          .star {
            color: #ff9017;
          }
        }
      }
    
    div:nth-child(4) {
      width: 430px;
      height: 72px;
      background: #fff0df;
      display: flex;
      background-color: #fff0df;
      padding: 15px;
      gap: 20px;
      margin: 15px 0;
      p {
        span:first-of-type {
          display: flex;
          flex-direction: column;
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: #1c1c1c;
          padding-right: 25px;
        }
        span:last-of-type {
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;
          color: #606060;
        }
      }
      p:nth-child(1) {
        span:first-of-type {
          color: #fa3434;
        }
      }
      p:nth-child(2),
      p:nth-child(3) {
        border-left: 2px solid #bdc1c8;
        padding-left: 10px;
      }
    }
  }
  table {
    border-collapse: collapse;
     
    tr:nth-child(1) ,
    tr:nth-child(4) ,
    tr:last-child {
  border-bottom: 1px solid #E0E0E0;
}
    
    tbody{
      tr {
        td:first-of-type {
         font-weight: 400;
         font-size: 16px;
         line-height: 19px;
         color: #8b96a5;
         padding: 10px 10px 10px 0;
       }
      td {
         padding-top: 7px;
         width: 189px;
         font-weight: 400;
         font-size: 16px;
         line-height: 19px;
         color: #505050;
       }
     }
   }
  }

  .col3 {
    .topCol {
      width: 280px;
      height: 290px;
      background: #ffffff;
      border: 1px solid #e3e8ee;
      box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
      border-radius: 6px;
      padding: 15px;
      div:first-child {
        display: flex;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 15px;

        gap: 7px;
        p:first-of-type {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          left: 1024px;
          top: 245px;
          background: #c6f3f1;
          border-radius: 4px;
          font-weight: 600;
          font-size: 28px;
          line-height: 24px;
          letter-spacing: -0.2px;
          color: rgba(76, 167, 167, 0.6);
        }
        p:last-of-type {
          width: 116px;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.2px;
          color: #1c1c1c;
        }
      }
      div:nth-child(2) {
        ul {
          padding-top: 15px;
          li {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.2px;
            color: #8b96a5;
            display: flex;
            align-items: center;
            gap: 10px;
            img {
              width: 15px;
              height: 15px;
            }
          }
        }
      }
      div:nth-child(3) {
        button {
          width: 248px;
          height: 40px;
          border: 1px solid #0d6efd;
          border-radius: 6px;
          margin-top: 10px;
        }
        button:first-of-type {
          background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
          color: #ffffff;
        }
        button:last-of-type {
          background: #ffffff;
          color: #0d6efd;
        }
      }
    }
    .bottomCol {
      padding-top: 18px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.1px;
      color: #0d6efd;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 7px;
      .icon {
        width: 20px;
        height: 20px;
      }
    }
  }
`;