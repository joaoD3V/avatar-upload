import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  canvas {
    pointer-events: none;
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  `}
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
    height: 12px;
  }
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-size: 14px;
    color: ${theme.colors.gray500};
    margin-left: 12px;
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: 14px;
    color: ${theme.colors.gray400};
    margin-top: ${theme.spacings.xxsmall};
  `}
`;
