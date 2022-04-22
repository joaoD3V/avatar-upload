import Slider from 'rc-slider';

import * as S from './styles';

export type CropSliderProps = {
  sliderValue: number;
  handleUpdateSliderValue: (value: number | number[]) => void;
};

export function CropSlider({
  sliderValue,
  handleUpdateSliderValue,
}: CropSliderProps) {
  return (
    <S.Wrapper>
      <S.Title>Crop</S.Title>

      <S.Slider>
        <Slider
          min={0}
          max={100}
          value={sliderValue}
          onChange={(value) => handleUpdateSliderValue(value)}
        />
      </S.Slider>
    </S.Wrapper>
  );
}
