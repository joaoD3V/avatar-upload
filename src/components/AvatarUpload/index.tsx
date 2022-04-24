import Dropzone from 'react-dropzone';

import { useAvatar } from 'hooks/useAvatar';
import { Area } from 'components/Area';
import { Avatar, AvatarProps } from 'components/Avatar';

import * as S from './styles';

export type AvatarUploadProps = {
  options?: AvatarProps;
};

export function AvatarUpload({ options }: AvatarUploadProps) {
  const { handlePreviewProfileImage, handleChangeStatus } = useAvatar();

  return (
    <Dropzone
      onDrop={(acceptedFiles: File[], fileRejections) => {
        fileRejections.length > 0
          ? handleChangeStatus('error')
          : handlePreviewProfileImage(acceptedFiles);
      }}
      accept={['image/jpeg', 'image/png', 'image/webp']}
      multiple={false}
    >
      {({ getRootProps, getInputProps }) => (
        <Area>
          <S.Content {...getRootProps()} data-testid="drop-wrapper">
            {options && <Avatar {...options} />}

            <S.Text>
              <S.TitleArea>
                <S.Icon
                  src="/img/image-icon.png"
                  alt="Illustration of mountains and sun, symbolizing a picture icon"
                />
                <S.Title>Organization Logo</S.Title>
              </S.TitleArea>
              <S.Subtitle>Drop the image here or click to browse.</S.Subtitle>
            </S.Text>
            <input {...getInputProps()} data-testid="drop-input" />
          </S.Content>
        </Area>
      )}
    </Dropzone>
  );
}
