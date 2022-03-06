import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavbarPrin from '../src/components/Navbar';
import Sidebar from '../src/components/Sidebar';
import Home from '../src/pages/Home';
import Clients from '../src/pages/Clients';
import Sales from '../src/pages/Sales';
import '../src/App.scss';

function App() {
  return (
    <Router>
      <div className='flex'>
        <Sidebar />
        <div className='content w-100'>
          <NavbarPrin />
          <Routes>
            <Route path="/" exact={true} element={<Home />}></Route>
            <Route path='/clients' exact={true} element={<Clients />}></Route>
            <Route path='/sales' exact={true} element={<Sales />}></Route>  
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;