import { useAvatar } from 'hooks/useAvatar';
import * as S from './styles';

export type AreaProps = {
  children: React.ReactNode;
  hasClose?: boolean;
};

export function Area({ children, hasClose = false }: AreaProps) {
  const { status, handleClose } = useAvatar();

  return (
    <S.Wrapper
      hasBorder={
        status === 'initial' ? true : status === 'saved' ? true : false
      }
    >
      {children}

      {hasClose && (
        <S.CloseButton title="Close edit" onClick={handleClose}>
          <img
            src="/img/close-icon.png"
            alt="Icon with the symbol X, indicating the action to close edit"
          />
        </S.CloseButton>
      )}
    </S.Wrapper>
  );
}
