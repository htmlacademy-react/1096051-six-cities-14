import { NameSpace } from '../../const';
import { State } from '../../types/state-type';

export const getCurrentPagePath = (state: State): string => state[NameSpace.Service].currentPagePath;
