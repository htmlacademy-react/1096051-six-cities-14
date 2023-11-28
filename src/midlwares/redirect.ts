import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { reducer } from '../store/reducer';
import browserHistory from '../browser-history';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'main/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
