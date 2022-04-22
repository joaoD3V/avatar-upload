import Avatar from 'components/Avatar';
import { ChangeEvent, useCallback, useRef, useState } from 'react';

import * as S from './styles';

export type ImageFileProps = string | ArrayBuffer | undefined;

export default function AvatarUpload() {
  const [error, setError] = useState(false);
  const [avatar, setAvatar] = useState<ImageFileProps>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePreviewProfileImage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;

      if (files && files[0]) {
        const type = files[0].type.split('/')[1];

        if (
          type === 'jpeg' ||
          type === 'jpg' ||
          type === 'png' ||
          type === 'webp'
        ) {
          const reader = new FileReader();
          reader.addEventListener('load', (event) => {
            const image = event.target!.result!;

            const imageCopy = new Image();
            imageCopy.src = `${image}`;

            imageCopy.onload = () => {
              return setAvatar(image);
            };
          });

          reader.readAsDataURL(files[0]);
        } else {
          return setError(true);
        }
      }
    },
    []
  );

  return (
    <S.Wrapper onClick={() => !avatar && inputRef.current?.click()}>
      {avatar ? (
        <Avatar src={`${avatar}`} />
      ) : (
        <S.Text>
          <S.TitleArea>
            <S.Icon
              src="/img/image-icon.png"
              alt="Ilustração de montanhas e sol, simbolizando um ícone de imagem"
            />
            <S.Title>Organization Logo</S.Title>
          </S.TitleArea>
          <S.Subtitle>Drop the image here or click to browse</S.Subtitle>
        </S.Text>
      )}

      <input
        type="file"
        id="upload"
        accept="image/*"
        hidden
        required
        onChange={(e) => handlePreviewProfileImage(e)}
        ref={inputRef}
      />
    </S.Wrapper>
  );
}
