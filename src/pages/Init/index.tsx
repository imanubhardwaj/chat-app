import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from 'components/Button';
import Input from 'components/Input';
import useUserInfo from 'hooks/useUserInfo';

export default function Init() {
  const [username, setUserName] = useState<string>('');
  const { createUser } = useUserInfo();

  const handleStartChat = () => {
    if (username) {
      createUser(username);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 h-full bg-gradient-to-r from-green-50 to-green-500">
      <form
        onSubmit={handleStartChat}
        className="flex items-center space-x-2 p-2 bg-white rounded-full w-[25rem]"
      >
        <Input
          className="custom-input no-border !text-base !bg-transparent"
          placeholder="Enter Your Name"
          value={username}
          onChange={setUserName}
          required
        />
        <Button
          type="submit"
          variant="contained"
          className="!p-0 bg-primary !h-10 !w-12 !rounded-full !min-w-0"
        >
          <SendIcon />
        </Button>
      </form>
    </div>
  );
}
