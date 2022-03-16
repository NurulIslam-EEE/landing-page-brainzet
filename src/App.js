import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner/Banner';
import Navigation from './components/shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
    </div>
  );
}

export default App;
