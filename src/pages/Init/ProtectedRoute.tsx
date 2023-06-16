import React from 'react';
import useUserInfo from 'hooks/useUserInfo';
import { Props } from 'types/react';
import Init from './index';

function ProtectedRoute({ children }: Props) {
  const { userInfo } = useUserInfo();

  return (
    <>
      {!userInfo && <Init />}
      {userInfo && children}
    </>
  );
}

export default ProtectedRoute;
