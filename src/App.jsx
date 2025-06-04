import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/themes/primeone-light.css';
import 'primereact/resources/themes/lara-light-pink/theme.css';

import Paths from './routes/Paths';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return(
    <div className='flex flex-column justify-content-between min-h-screen'
    style={{background: "#F5F5F5"}}>
      <BrowserRouter /*basename='/Projeto-FrontEnd'*/>
        <Paths/>
      </BrowserRouter>
    </div>
  )
}
export default App;