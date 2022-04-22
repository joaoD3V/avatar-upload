import { createContext, useState, useCallback } from 'react';

export type AvatarStatus = 'initial' | 'editing' | 'saved' | 'error';

export type ImageFileProps = string | ArrayBuffer | undefined;

type AvatarContexType = {
  status: AvatarStatus;
  avatarImage: ImageFileProps;
  sliderValue: number;
  handleClose: () => void;
  handleChangeStatus: (newStatus: AvatarStatus) => void;
  handlePreviewProfileImage: (files: File[]) => void;
  handleUpdateSliderValue: (value: number | number[]) => void;
};

type AvatarContextProviderProps = {
  children: React.ReactNode;
};

export const AvatarContext = createContext({} as AvatarContexType);

export function AvatarContextProvider({
  children,
}: AvatarContextProviderProps) {
  const [status, setStatus] = useState<AvatarStatus>('initial');
  const [avatarImage, setAvatarImage] = useState<ImageFileProps>(undefined);
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleClose = useCallback(() => {
    setStatus('initial');
    setAvatarImage(undefined);
  }, []);

  const handleChangeStatus = useCallback((newStatus: AvatarStatus) => {
    setStatus(newStatus);
  }, []);

  const handlePreviewProfileImage = useCallback((files: File[]) => {
    if (files && files[0]) {
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        const image = event.target!.result!;

        const imageCopy = new Image();
        imageCopy.src = `${image}`;

        imageCopy.onload = () => {
          setAvatarImage(image);
          setSliderValue(0);
          return setStatus('editing');
        };
      });

      reader.readAsDataURL(files[0]);
    }
  }, []);

  const handleUpdateSliderValue = useCallback((value: number | number[]) => {
    setSliderValue(Number(value));
  }, []);

  return (
    <AvatarContext.Provider
      value={{
        status,
        avatarImage,
        sliderValue,
        handleClose,
        handleChangeStatus,
        handlePreviewProfileImage,
        handleUpdateSliderValue,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
}
