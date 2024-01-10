import Card1 from './components/Card1';
import Card2 from './components/Card2';
import './App.css';

// iskelti mygtuka i ui/Btn.js
function Btn() {
  const btnName = 'Pirkti bilietus';

  return <button className='btn'>{btnName}</button>;
}

const title = <h3 className='card__title'>New York</h3>;

function App() {
  const mainTitle = 'Turo datos';

  return (
    <div className='App'>
      <section className='bands-section'>
        <div className='container'>
          <h2 className='section__title'>{mainTitle}</h2>
          <p className='section__subtitle'>Remember to book your tickets!</p>

          <ul className='unlisted grid'>
            <Card1 />
            <Card2 />
            {/* import card3 */}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
