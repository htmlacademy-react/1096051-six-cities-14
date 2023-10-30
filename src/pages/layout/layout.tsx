import { Outlet, useOutlet } from 'react-router-dom';
import Header from '../../components/header/header';
import { UserType } from '../../types/User.type';
import { PagePaths } from '../../const';
import Footer from '../../components/footer/footer';
import { useState } from 'react';

type LayoutProps = {
  user: UserType;
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

function Layout({user}: LayoutProps): JSX.Element {
  const [pagePath, setPagePath] = useState(PagePaths.MAIN);

  return (
    <div className={`page ${getPageClassName(pagePath)}`}>
      <Header user={user} />
      <Outlet context={setPagePath} />
      {/* { pagePath === PagePaths.FAVORITES && <Footer />} */}
    </div>
  );
}

export { Layout };
