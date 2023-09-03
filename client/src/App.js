
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {Box} from  "@mui/material";
import DetailsView from './components/details/DetailsView';

//components  
import DataProvider from './context/data-provider';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';


function App() {
  return (
    < DataProvider>
    <BrowserRouter>
       <Header /> 
      
       <Box style={{marginTop: 54 }} >
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<DetailsView/>}/>
        <Route path='/cart' element={<Cart />} />
        </Routes>
       </Box>
       </BrowserRouter>
      
    </ DataProvider>
  );
}

export default App;
