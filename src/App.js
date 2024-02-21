import './App.css';
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting='Te resolvemos el menú de tus eventos!'/>
    </div>
  );
}

export default App;
