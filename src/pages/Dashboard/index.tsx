import React from 'react';
import ChatView from './components/ChatView';

export default function Dashboard() {
  return (
    <div className="h-full w-full flex flex-col overflow-y-scroll">
      <span className="text-lg text-white font-bold bg-primary p-4">
        Chat
      </span>
      <div className="flex flex-col flex-1 overflow-hidden">
        <ChatView />
      </div>
    </div>
  );
}
