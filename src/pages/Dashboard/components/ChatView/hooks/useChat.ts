import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import dayjs from 'dayjs';
import groupBy from 'lodash/groupBy';
import useUserInfo from 'hooks/useUserInfo';
import { db } from 'config/firebase';
import { Message } from '@/types/message';

type MessageWithDate = Message & {
  formattedDate: string;
};

type Props = {
  onSendMessage: () => void;
  onRetrieveMessage: () => void;
};

const messagesRef = collection(db, 'messages');

const formatMessage = (doc: DocumentData): MessageWithDate => ({
  username: doc.username,
  userId: doc.userId,
  text: doc.text,
  createdAt: doc.createdAt?.toDate(),
  formattedDate: dayjs(doc.createdAt?.toDate()).format('DD MMM YYYY'),
});

function useChat() {
  const [messages, setMessages] = useState<[string, Message[]][]>([]);
  const { userInfo } = useUserInfo();

  useEffect(() => {
    const _query = query(messagesRef, orderBy('createdAt'));
    const unsubscribe = onSnapshot(
      _query,
      (querySnapshot) => {
        const messages: Message[] = querySnapshot.docs.map((doc) => formatMessage(doc.data()));
        const groupedMessages = Object.entries(groupBy(messages, 'formattedDate'));
        setMessages(groupedMessages);
      },
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessage = async (message: string) => {
    const formattedMessage = message?.trim();
    if (formattedMessage?.length > 0) {
      await addDoc(messagesRef, {
        userId: userInfo.userId,
        username: userInfo.username,
        text: formattedMessage,
        createdAt: serverTimestamp(),
      });
    }
  };

  return {
    sendMessage,
    messages,
  };
}

export default useChat;
