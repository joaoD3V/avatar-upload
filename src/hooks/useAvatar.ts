import { AvatarContext } from 'contexts/AvatarContext';
import { useContext } from 'react';

export function useAvatar() {
  const value = useContext(AvatarContext);

  return value;
}
