import './App.css';

function App() {
  return (
    <div className='App'>
      <section className='bands-section'>
        <div className='container'>
          <h2 className='section__title'>Tour dates</h2>
          <p className='section__subtitle'>Remember to book your tickets!</p>

          <ul className='unlisted grid'>
            <li className='band-card'>
              <img className='card__img' src='/img/newyork.jpg' alt='paris' />
              <div className='card__info'>
                <h3 className='card__title'>New York</h3>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
