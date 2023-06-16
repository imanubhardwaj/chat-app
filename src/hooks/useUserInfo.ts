import { useState } from 'react';
import isNil from 'lodash/isNil';
import { v4 as uuid } from 'uuid';
import { User } from 'types/user';

export default function useUserInfo() {
  const userString = localStorage.getItem('userInfo');
  const user = !isNil(userString) ? JSON.parse(userString) : undefined;
  const [userInfo, setUserInfo] = useState<User>(user);

  const createUser = (username: string): void => {
    const id = uuid();
    const user: User = {
      userId: id,
      username,
    };
    setUserInfo(user);
    localStorage.setItem('userInfo', JSON.stringify(user));
  };

  return {
    userInfo,
    createUser,
  };
}
