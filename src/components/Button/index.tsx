import React, { ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import Spinner from '../Spinner';

type Props = ButtonProps & {
  loading?: boolean;
};

function Button({
  className,
  variant,
  disabled,
  loading,
  children,
  ...props
}: Props, ref: ForwardedRef<HTMLButtonElement>) {
  const classes = clsx(className, {
    '!text-white': variant === 'contained',
  });
  const spinnerClasses = clsx('ml-2', {
    '!hidden': !loading,
  });

  return (
    <MuiButton
      ref={ref}
      className={classes}
      variant={variant}
      disabled={disabled || loading}
      {...props}
    >
      {children}
      <Spinner className={spinnerClasses} />
    </MuiButton>
  );
}

export default forwardRef(Button);
