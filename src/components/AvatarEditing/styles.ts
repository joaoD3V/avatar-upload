import { darken } from 'polished';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    canvas {
      margin-right: ${theme.spacings.medium};
      pointer-events: none;

      ${media.lessThan('medium')`
        margin-right: 0;
      `}
    }

    ${media.lessThan('medium')`
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
  `}
`;

export const CropArea = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    height: 100%;
    width: 276px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;

    ${media.lessThan('medium')`
      align-items: center;
    `}
  `}
`;

export const SaveButton = styled.button`
  ${({ theme }) => css`
    width: 109px;
    height: 32px;
    border-radius: 16px;
    background: ${theme.colors.gray600};
    color: ${theme.colors.white};
    border: 0;
    outline: 0;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.medium};
    margin-top: 35px;
    cursor: pointer;
    transition: background-color ${theme.transition.fast};

    &:hover {
      background: ${darken(0.1, theme.colors.gray600)};
    }
  `}
`;
