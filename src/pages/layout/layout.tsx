import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import { PagePaths } from '../../const';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import { getCurrentPagePath } from '../../store/app-service/app-service.selector';

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

function Layout(): JSX.Element {
  const currentPagePath = useAppSelector(getCurrentPagePath);

  return (
    <div className={`page ${getPageClassName(currentPagePath)}`}>
      <Header />
      <Outlet />
      {currentPagePath !== PagePaths.MAIN && <Footer />}
    </div>
  );
}

export { Layout };
