import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start !important;
    justify-content: flex-start !important;

    canvas {
      margin-right: ${theme.spacings.medium};
      pointer-events: none;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
  `}
`;
