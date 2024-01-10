import './assets/style/App.scss';

// Containers
import Header from './containers/Header';
import Hero from './containers/Hero';
import Menu from './containers/Menu';
import Order from './containers/Order';
import About from './containers/About';
import Gallery from './containers/Gallery';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Order />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
