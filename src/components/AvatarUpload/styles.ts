import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 553px;
    height: 177px;
    background: ${theme.colors.gray200};
    border: 2px dashed ${theme.colors.border};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 3.2rem;
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
`;

export const Icon = styled.img``;

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
