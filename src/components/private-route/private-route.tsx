import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
  hasAccess: boolean;
  children: JSX.Element;
  deniedPath: string;
}

function PrivateRouter({hasAccess, children, deniedPath}: PrivateRouterProps): JSX.Element {
  return (
    hasAccess ? children : <Navigate to={deniedPath}/>
  );
}

export { PrivateRouter };
