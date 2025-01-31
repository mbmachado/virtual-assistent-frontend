import './styles.scss';

import { Icon } from '@mui/material';
import React from 'react';
import { Question, Topic } from 'types';

import IciaImage from '../../../assets/icon-icia.svg';
import ChatMessageItems from '../ChatMessageItems';

type ChatMessageProps = {
  children?: React.ReactNode;
  questions?: Question[];
  side: 'left' | 'right';
  text?: string;
  topics?: Topic[];
  askUseful?: boolean;
  handleUsefulOptionClick?: (useful: boolean) => void;
  generateMessegesForTopicSelection?: (topic: Topic) => void;
  generateMessegesForQuestionSelection?: (question: Question) => void;
};

export default function ChatMessage({
  children,
  questions,
  side,
  text,
  topics,
  askUseful,
  handleUsefulOptionClick,
  generateMessegesForTopicSelection,
  generateMessegesForQuestionSelection,
}: ChatMessageProps) {
  const handleItemSelection = (item: Question | Topic) => {
    if (typeof generateMessegesForTopicSelection === 'function' && isTopic(item)) {
      generateMessegesForTopicSelection(item);
    }
    if (typeof generateMessegesForQuestionSelection === 'function' && isQuestion(item)) {
      generateMessegesForQuestionSelection(item);
    }
  };

  const isTopic = (item: Topic | Question): item is Topic => {
    return (item as Topic).name !== undefined;
  };

  const isQuestion = (item: Question | Topic): item is Question => {
    return (item as Question).description !== undefined;
  };

  return (
    <div className={`chat-message d-flex ${side} w-100`}>
      <div className="chat-user rounded-circle align-self-end d-flex align-items-center justify-content-center">
        {side === 'left' ? (
          <img src={IciaImage} className="h-auto" alt="assistente chatbot" />
        ) : (
          <Icon>person</Icon>
        )}
      </div>
      <div className="chat-ballon py-3 px-4">
        {text?.length ? (
          <h3 className="font-weight-normal mb-0">
            {text
              .trim()
              .split(' ')
              .map((textSnippet, index) => {
                return textSnippet.includes('://') ? (
                  <>
                    &nbsp;
                    <a
                      target="_blank"
                      className="text-white"
                      href={textSnippet}
                      rel="noreferrer"
                      key={index}
                    >
                      {textSnippet}
                    </a>
                  </>
                ) : (
                  <span key={index}> {textSnippet}</span>
                );
              })}
          </h3>
        ) : null}

        {children}

        <ChatMessageItems items={topics} handleItemSelection={handleItemSelection} />

        {questions?.length ? (
          <div className="d-block w-100">
            <ChatMessageItems
              items={questions}
              handleItemSelection={handleItemSelection}
            />
          </div>
        ) : null}

        {askUseful && handleUsefulOptionClick ? (
          <div className="d-block w-100">
            <h4 className="font-weight-normal mb-1 pt-2">Esta resposta foi útil?</h4>
            <div className="d-flex">
              <button
                type="button"
                onClick={() => handleUsefulOptionClick(true)}
                title="Sim"
                className={`chat-item-option d-block rounded bg-info text-dark py-0 px-2 border-0`}
              >
                <span>Sim</span>
              </button>
              <button
                type="button"
                onClick={() => handleUsefulOptionClick(false)}
                title="Não"
                className={`chat-item-option d-block rounded bg-info text-dark py-0 px-2 ml-2 border-0`}
              >
                <span>Não</span>
              </button>
            </div>
          </div>
        ) : null}
        <div></div>
      </div>
    </div>
  );
}
