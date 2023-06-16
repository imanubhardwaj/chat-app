import React, {
  Fragment,
  useEffect,
  useRef,
} from 'react';
import {
  Controller,
  useForm,
} from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Button from 'components/Button';
import Input from 'components/Input';
import Message from './components/Message';
import useChat from './hooks/useChat';
import { scrollToBottom } from './utils/helper';

type FormValue = { message: string };

const defaultMessage: FormValue = { message: '' };

export default function ChatView() {
  const chatRef = useRef<HTMLDivElement>(null);
  const actionBtnClasses = '!text-gray-400 !min-w-0 !rounded-full';
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormValue>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: defaultMessage,
  });

  const { sendMessage, messages } = useChat();

  const onSubmit = async (data: FormValue) => {
    reset(defaultMessage);
    await sendMessage(data?.message);
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom(chatRef);
    }
  }, [messages]);

  return (
    <div className="h-full flex flex-col h-full bg-zinc-200">
      <div
        className="flex-1 overflow-hidden overflow-y-scroll pt-4 pb-2 space-y-2"
        ref={chatRef}
      >
        {messages.map(([date, messages]) => (
          <Fragment key={date}>
            <div className="flex justify-center">
              <p className="text-sm text-center bg-gray-300 p-1 rounded">
                {date}
              </p>
            </div>
            {messages.map((item) => (
              <Message
                key={item.createdAt}
                message={item}
              />
            ))}
          </Fragment>
        ))}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex items-center p-2 space-x-2"
      >
        <div className="flex items-center p-2 flex-1 bg-white rounded-full">
          <Button
            className={actionBtnClasses}
            variant="text"
          >
            <AttachFileIcon />
          </Button>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className="custom-input !w-full !flex-1 no-border !text-base"
                id="message"
              />
            )}
          />
        </div>
        <Button
          className="!p-0 !bg-primary !h-14 !w-14 !rounded-full !min-w-0"
          type="submit"
          variant="contained"
          disabled={isSubmitting}
        >
          <SendIcon />
        </Button>
      </form>
    </div>
  );
}
