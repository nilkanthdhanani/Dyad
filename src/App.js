import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes';
import { WOW } from 'wowjs';
import './styles/index.scss';
import 'animate.css';
import 'wowjs/css/libs/animate.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const wow = new WOW({
      live: false
    });
    wow.init();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
