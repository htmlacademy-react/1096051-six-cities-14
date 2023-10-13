import SixCitiesScreen from '../../pages/six-cities-mian-page/six-cities-screen';

type AppProps = {
  countOffersRent: number;
}

function App({countOffersRent}: AppProps): JSX.Element {
  return (
    <SixCitiesScreen countOffersRent={countOffersRent} />
  );
}

export default App;
