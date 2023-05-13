import Navigation from './commponents/navigation/Navigation.jsx';
import Hero from './commponents/hero/Hero.jsx';
import ValueService from './commponents/valueService/ValueService.jsx';
import Articles from './commponents/articles/Articles.jsx';
import Footer from './commponents/footer/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Hero/>
      <ValueService/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
