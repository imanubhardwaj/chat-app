import React from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import useUserInfo from 'hooks/useUserInfo';
import { Message as MessageType } from '../../../../types/message';
import Avatar from './Avatar';

type Props = {
  message: MessageType;
};

function Message({ message }: Props) {
  const { userInfo } = useUserInfo();
  const {
    text,
    createdAt,
    userId,
    username,
  } = message;
  const sent = userId === userInfo.userId;
  const messageContainerClasses = clsx(
    'flex items-center px-2 gap-2',
    { 'flex-row-reverse': sent },
  );

  return (
    <div className={messageContainerClasses}>
      <Avatar name={username} />
      <div className="flex flex-col p-2.5 max-w-[80%] rounded-lg bg-primaryLight">
        <span className="text-sm">{text}</span>
        <span className="text-xs font-normal text-secondaryLight text-right">
          {dayjs(createdAt).format('hh:mm a')}
        </span>
      </div>
    </div>
  );
}

export default Message;
