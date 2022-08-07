import { v4 as guid } from 'uuid';
import { injectable } from '../injectable';
import { injectTodosViewModel } from './todos.view-model';
import { useState } from 'react';
import { injectNotificationService } from '../services/notification.service';
import { useAction } from 'injectable-react';

export const createTopBarViewModel = injectable.hook(
  injectTodosViewModel(),
  injectNotificationService(),
  (useTodosViewModel, notificationService) => {
    const [text, setText] = useState('');

    const { create, todos } = useTodosViewModel();

    const handleCreateTodo = useAction(() => {
      const textTrimmed = text.trim();
      if (textTrimmed === '') return;

      const suchTodo = todos.find((todo) => todo.text.toLowerCase() === textTrimmed.toLowerCase());

      if (suchTodo) {
        notificationService.warn('You already have such a todo');
        return;
      }

      create({ id: guid(), text, checked: false });
      setText('');
    });

    return {
      text,
      setText,
      handleCreateTodo,
    };
  },
);

export const injectTopBarViewModel = () => injectable.inject.hook()('topBarViewModel');
