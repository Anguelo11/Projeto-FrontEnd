import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primeflex/themes/primeone-light.css';
import 'primereact/resources/themes/lara-light-pink/theme.css';

import Paths from './routes/Paths';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';




const App = () => {

  return(
    <div className='flex flex-column justify-content-between min-h-screen'>
      <BrowserRouter>
        <Header/>
        <Paths/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
export default App;