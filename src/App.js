import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Viewdata from './Pages/Viewdata';
import Adddata from './Pages/Adddata';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit_data from './Pages/Edit_data';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<><Header /><Viewdata /><Footer /></>} />
          <Route path='/adddata' element={<><Header /><Adddata /><Footer /></>} />
          <Route path='/edit_user/:id' element={<><Header /> <Edit_data/> <Footer /></>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
