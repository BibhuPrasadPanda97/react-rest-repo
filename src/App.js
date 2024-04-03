import './styles/App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div className="my-3 d-flex align-items-center justify-content-center">
        <Card />
      </div>
    </>
  );
}

export default App;
