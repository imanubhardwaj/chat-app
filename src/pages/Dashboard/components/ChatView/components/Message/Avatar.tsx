import React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import { getUserInitials } from '../../utils/helper';

type Props = {
  name: string;
};

function Avatar({ name }: Props) {
  const initials = getUserInitials(name);

  return (
    <MuiAvatar
      sx={{
        width: 38,
        height: 38,
        fontSize: 16,
      }}
      variant="circular"
    >
      {initials}
    </MuiAvatar>
  );
}

export default Avatar;
