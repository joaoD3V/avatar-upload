import AvatarEditor from 'react-avatar-editor';

export type AvatarProps = {
  src: string;
  sliderValue: number;
};

export function Avatar({ src, sliderValue }: AvatarProps) {
  return (
    <AvatarEditor
      image={src}
      width={113}
      height={113}
      border={0}
      color={[242, 245, 248]}
      borderRadius={72.5}
      scale={1 + sliderValue / 10}
      rotate={0}
      aria-label="Avatar canva"
    />
  );
}
