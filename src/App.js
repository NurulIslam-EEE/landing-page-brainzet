import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllInOne from './components/AllInOne/AllInOne';
import Banner from './components/Banner/Banner';
import Company from './components/Company/Company';
import LatestNews from './components/LatestNews/LatestNews';
import Footer from './components/shared/Footer/Footer';
import Navigation from './components/shared/Navigation/Navigation';

function App() {
  return (
    <div className="m-0 p-0">
      <Navigation />
      <Banner />
      <Company />
      <AllInOne />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default App;
