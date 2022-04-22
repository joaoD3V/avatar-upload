import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
