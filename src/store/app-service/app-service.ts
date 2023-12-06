import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, PagePaths } from '../../const';
import { AppService } from '../../types/state-type';

const initialState: AppService = {
  currentPagePath: PagePaths.MAIN,
};

export const appService = createSlice({
  name: NameSpace.Service,
  initialState,
  reducers: {
    changePagePath: (state, action: PayloadAction<{ pagePath: string }>) => {
      const { pagePath } = action.payload;
      state.currentPagePath = pagePath;
    },
  },
});

export const {changePagePath} = appService.actions;
