import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, PagePaths } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouterProps = {
  children: JSX.Element;
  deniedPath: string;
}

function PrivateRouter({ children, deniedPath }: PrivateRouterProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const currentPagePath = window.location.pathname;
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const isAccess = currentPagePath === PagePaths.LOGIN ? !isAuth : isAuth;

  return (
    isAccess ? children : <Navigate to={deniedPath} />
  );
}

export { PrivateRouter };
