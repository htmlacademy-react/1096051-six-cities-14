import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { getCommentDataList } from './mock/comment';
import { getUserData } from './mock/user';
import { CITY } from './mock/city';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchOfferAction } from './store/api-actions';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        city={CITY}
        commentDataList={getCommentDataList()}
        user={getUserData()}
      />
    </Provider>
  </React.StrictMode>
);
