import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, PagePaths } from '../../const';

type PrivateRouterProps = {
  authStatus: string;
  children: JSX.Element;
  deniedPath: string;
}

function PrivateRouter({ authStatus, children, deniedPath }: PrivateRouterProps): JSX.Element {
  const currentPagePath = window.location.pathname;
  const isAuth = authStatus === AuthorizationStatus.Auth;
  const isAccess = currentPagePath === PagePaths.LOGIN ? !isAuth : isAuth;

  return (
    isAccess ? children : <Navigate to={deniedPath} />
  );
}

export { PrivateRouter };
