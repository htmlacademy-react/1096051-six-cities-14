import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, PagePaths } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';

type PrivateRouterProps = {
  children: JSX.Element;
  deniedPath: string;
}

function PrivateRouter({ children, deniedPath }: PrivateRouterProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const currentPagePath = window.location.pathname;
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const isAccess = currentPagePath === PagePaths.LOGIN ? !isAuth : isAuth;

  return (
    isAccess ? children : <Navigate to={deniedPath} />
  );
}

export { PrivateRouter };
