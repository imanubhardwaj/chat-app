import React, {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
} from 'react';
import clsx from 'clsx';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type Props = Omit<TextFieldProps, 'onChange'> & {
  onChange: (val: string, e: ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  className,
  onChange,
  ...props
}: Props, ref: ForwardedRef<HTMLInputElement>) {
  const classes = clsx('custom-input', className);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value = '' } = e.target;
    onChange(value, e);
  };

  return (
    <TextField
      className={classes}
      ref={ref}
      onChange={handleChange}
      {...props}
    />
  );
}

export default forwardRef(Input);
