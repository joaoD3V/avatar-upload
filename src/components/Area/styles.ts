import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type WrapperProps = {
  hasBorder: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasBorder }) => css`
    width: 553px;
    height: 177px;
    background: ${theme.colors.gray200};
    ${hasBorder && `border: 2px dashed ${theme.colors.border}`};
    border-radius: 8px;
    padding: 32px;
    position: relative;

    ${media.lessThan('medium')`
       width: 90vw;
       height: 277px;
       padding: 16px;
    `}
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;
  border: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
`;
