import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state-type';
import { UserType } from '../../types/user-type';

export const getAuthorizationStatus = (state: State): string => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getUserData = (state: State): UserType => state[NameSpace.User].userData;
