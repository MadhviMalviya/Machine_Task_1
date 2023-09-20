
import './App.css';

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='Container' >
     <Sidebar/>
     <Cards/>
     </div>
    </div>
  );
}

export default App;
