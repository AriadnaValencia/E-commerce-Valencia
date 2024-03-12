import './App.css';
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path= '/' element={<ItemListContainer greeting='Te resolvemos el menú de tus eventos!'/>} />
        <Route path='/categories/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer greeting='Categoria:'/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
