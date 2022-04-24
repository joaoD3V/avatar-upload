import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    min-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
