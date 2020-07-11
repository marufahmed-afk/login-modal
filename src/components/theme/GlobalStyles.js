import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    .card {
      background: ${({ theme }) => theme.secondaryColor};
    }
    .close {
      background-color: ${({ theme }) => theme.closeColor};
    }
    .login-form {
      input[type='text'] {
        background-color: ${({ theme }) => theme.lightColor};
        color: ${({ theme }) => theme.text};
      }
    }
  },

  `;
