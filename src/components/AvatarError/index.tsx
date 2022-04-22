import { useAvatar } from 'hooks/useAvatar';

import { Area } from 'components/Area';

import * as S from './styles';

export function AvatarError() {
  const { handleClose } = useAvatar();

  return (
    <Area hasClose>
      <S.Content>
        <S.IconArea>
          <img src="/img/attention-icon.png" alt="Exclamation icon" />
        </S.IconArea>

        <S.Text>
          <S.Title>Sorry, the upload failed.</S.Title>
          <S.TryButton title="Try Again" onClick={handleClose}>
            Try again
          </S.TryButton>
        </S.Text>
      </S.Content>
    </Area>
  );
}
