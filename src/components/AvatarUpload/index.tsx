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
          <S.Content {...getRootProps()}>
            {options && <Avatar {...options} />}

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
            <input {...getInputProps()} />
          </S.Content>
        </Area>
      )}
    </Dropzone>
  );
}
