import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';

type PrivateRouterProps = {
  status: string;
  children: JSX.Element;
  deniedPath: string;
}

function PrivateRouter({status, children, deniedPath}: PrivateRouterProps): JSX.Element {
  return (
    status === AuthorizationStatus.Auth ? children : <Navigate to={deniedPath}/>
  );
}

export { PrivateRouter };
