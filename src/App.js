import './App.css';
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting='Te resolvemos el menú de tus eventos!'/>
    </div>
  );
}

export default App;
