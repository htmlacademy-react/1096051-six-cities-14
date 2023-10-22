import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import { UserType } from '../../types/User.type';
import { PagePaths } from '../../const';
import Footer from '../../components/footer/footer';

type LayoutProps = {
  user: UserType;
}

function getPageClassName(currentPage: string): string | undefined {
  return currentPage === PagePaths.MAIN ? 'page--gray page--main' : '';
}

function Layout({user}: LayoutProps): JSX.Element {
  const currentPage = window.location.pathname;

  return (
    <div className={`page ${getPageClassName(currentPage)}`}>
      <Header user={user} />
      <Outlet />
      { currentPage === PagePaths.FAVORITES && <Footer />}
    </div>
  );
}

export { Layout };
