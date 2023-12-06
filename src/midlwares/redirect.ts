import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../browser-history';
import { rootReducer } from '../store/root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

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
