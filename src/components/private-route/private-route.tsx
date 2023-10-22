import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
  hasAccess: boolean;
  children: JSX.Element;
}

function PrivateRouter({hasAccess, children}: PrivateRouterProps): JSX.Element {
  return (
    hasAccess ? children : <Navigate to={'/login'}/>
  );
}

export { PrivateRouter };
