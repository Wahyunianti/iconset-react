import './index.css';
import Pelangi from './background/pelangi';
import Pelangi2 from './background/pelangi2';
import Navbar from './components/navbar';
import Icon from './components/icons';




function App() {
  return (
    <div className="App">
      <Pelangi />
      <Pelangi2 />


    <div className='container'>
      <Navbar />
      <main className='main'>
      <Icon />

      </main>
    </div>

    </div>
  );
}

export default App;
