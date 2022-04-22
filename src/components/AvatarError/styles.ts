import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const IconArea = styled.div`
  ${({ theme }) => css`
    width: 113px;
    height: 113px;
    border-radius: 72.5px;
    background: ${theme.colors.gray300};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Text = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: ${theme.spacings.medium};
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.orange};
  `}
`;

export const TryButton = styled.button`
  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray600};
    background: transparent;
    border: 0;
    outline: 0;
    text-decoration: underline;
    margin-top: 12px;
    cursor: pointer;
    transition: color ${theme.transition.fast};

    &:hover {
      color: ${darken(0.2, theme.colors.gray600)};
    }
  `}
`;
