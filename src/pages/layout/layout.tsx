import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import { UserType } from '../../types/user-type';
import { PagePaths } from '../../const';
import Footer from '../../components/footer/footer';
import { useState } from 'react';

type LayoutProps = {
  user: UserType;
  authStatus: string;
}

function getPageClassName(currentPage: string): string | undefined {
  switch (currentPage) {
    case PagePaths.MAIN:
      return 'page--gray page--main';
    case PagePaths.LOGIN:
      return 'page--gray page--login';
    default:
      return '';
  }
}

function Layout({ user, authStatus }: LayoutProps): JSX.Element {
  const [pagePath, setPagePath] = useState(PagePaths.MAIN);

  function handlePagePath(path: string): void {
    setPagePath(path);
  }

  return (
    <div className={`page ${getPageClassName(pagePath)}`}>
      <Header user={user} handlePagePath={handlePagePath} authStatus={authStatus}/>
      <Outlet />
      {pagePath !== PagePaths.MAIN && <Footer handlePagePath={handlePagePath} />}
    </div>
  );
}

export { Layout };
