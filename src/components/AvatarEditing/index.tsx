import { Avatar } from 'components/Avatar';
import { CropSlider } from 'components/CropSlider';
import { Area } from 'components/Area';

import * as S from './styles';
import { useAvatar } from 'hooks/useAvatar';

export type AvatarEditingProps = {
  src: string;
};

export function AvatarEditing({ src }: AvatarEditingProps) {
  const { sliderValue, handleUpdateSliderValue, handleChangeStatus } =
    useAvatar();

  return (
    <Area hasClose>
      <S.Content>
        <Avatar src={src} sliderValue={sliderValue} />

        <S.CropArea>
          <CropSlider
            sliderValue={sliderValue}
            handleUpdateSliderValue={handleUpdateSliderValue}
          />

          <S.SaveButton
            title="Save edit"
            onClick={() => handleChangeStatus('saved')}
          >
            Save
          </S.SaveButton>
        </S.CropArea>
      </S.Content>
    </Area>
  );
}
