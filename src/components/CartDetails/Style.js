import styled from "styled-components";

export const StyleCartDetails = styled.section`
  .CartDetails {
    width: 880px;
  }

  .section {
    display: flex;
    flex-wrap: wrap;
  }
  .buttons {
    display: flex;
    gap: 65%;
    button {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      border: 1px solid #e3e8ee;
      border-radius: 6px;
    }
    button:first-of-type {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
      color: #ffffff;
      width: 160px;
      height: 40px;
    }
    button:last-of-type {
      background: #ffffff;
      color: #0d6efd;
    }
  }
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.2px;
    color: #1c1c1c;
  }
  .total {
    width: 280px;
    height: 302px;
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #505050;
    }
    form {
      .Apply {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #0d6efd;
        background: #ffffff;
        border: 1px solid #e3e8ee;
        width: 85px;
        height: 40px;
      }
    }
    table {
      tr {
        td {
          padding: 10px 0;
        }
        td:first-child {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.2px;
          color: #505050;
        }
      }
      tr {
        td:last-child {
          padding-left: 75px;
        }
      }
      tr:first-child {
        td:last-child {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.2px;
          color: #505050;
        }
      }
      tr:nth-child(2) {
        td:last-child {
          color: #fa3434;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.2px;
        }
      }
      tr:nth-child(3) {
        td:last-child {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.2px;
          color: #00b517;
        }
      }
      tr:last-child {
        td:first-child {
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          color: #1c1c1c;
        }
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.2px;
        color: #1c1c1c;
      }
    }
    .Checkout {
      background: #00b517;
      border-radius: 8px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      width: 247px;
      height: 54px;
      border: none;
    }
  }
`;
