import { AvatarEditing } from 'components/AvatarEditing';
import { AvatarError } from 'components/AvatarError';
import { AvatarUpload } from 'components/AvatarUpload';
import { useAvatar } from 'hooks/useAvatar';

import * as S from './styles';

export function Home() {
  const { status, avatarImage, sliderValue } = useAvatar();

  return (
    <S.Wrapper>
      {status === 'initial' && <AvatarUpload />}
      {status === 'editing' && avatarImage && (
        <AvatarEditing src={`${avatarImage}`} />
      )}
      {status === 'error' && <AvatarError />}
      {status === 'saved' && avatarImage && (
        <AvatarUpload options={{ src: `${avatarImage}`, sliderValue }} />
      )}
    </S.Wrapper>
  );
}
