import CropSlider from 'components/CropSlider';
import { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

import * as S from './styles';

export type AvatarProps = {
  src: string;
};

export default function Avatar({ src }: AvatarProps) {
  const [sliderValue, setSliderValue] = useState<number>(0);

  function handleUpdateSliderValue(value: number | number[]) {
    setSliderValue(Number(value));
  }

  return (
    <S.Wrapper>
      <AvatarEditor
        image={src}
        width={113}
        height={113}
        border={0}
        color={[242, 245, 248]}
        borderRadius={72.5}
        scale={1 + sliderValue / 10}
        rotate={0}
      />

      <S.Content>
        <CropSlider
          sliderValue={sliderValue}
          handleUpdateSliderValue={handleUpdateSliderValue}
        />
      </S.Content>
    </S.Wrapper>
  );
}
