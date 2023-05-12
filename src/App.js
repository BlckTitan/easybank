import Navigation from './commponents/navigation/Navigation.jsx';
import Hero from './commponents/hero/Hero.jsx';
import ValueService from './commponents/valueService/ValueService.jsx';
import Articles from './commponents/articles/Articles.jsx';

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Hero/>
      <ValueService/>
      <Articles/>
    </div>
  );
}

export default App;
