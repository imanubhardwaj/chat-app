import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
  className?: string;
  size?: number;
};

export default function Spinner({ className, size = 14 }: Props) {
  return (
    <CircularProgress
      className={className}
      color="inherit"
      size={size}
    />
  );
}
