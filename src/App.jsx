import { Link } from 'react-router-dom';
import './App.css';
import Pockedex from './components/Pockedex/Pockedex';
import CustomRoutes from './Routes/CustomRoutes';

function App() {
  

  return (
    <div className='outer-pokedex'>
      <h1 id="heading">
        <Link to={'/'}>Pokedex</Link>
        </h1>
      <CustomRoutes/>
    </div>
  )
}

export default App
