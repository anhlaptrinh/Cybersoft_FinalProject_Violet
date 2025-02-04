
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import "./index.scss";

import { useRouteElement } from './routers'

function App() {
  const routeElement = useRouteElement();

  return (
    <>
      {routeElement}
     
    </>
  )
}

export default App
