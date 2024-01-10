import './App.css';

function App() {
  return (
    <div className='App'>
      <section className='bands-section'>
        <div className='container'>
          <h2 className='section__title'>Tour dates</h2>
          <p className='section__subtitle'>Remember to book your tickets!</p>

          <ul className='unlisted grid'>
            {/* one card */}
            <li className='band-card'>
              <img className='card__img' src='/img/newyork.jpg' alt='paris' />
              <div className='card__info'>
                <h3 className='card__title'>New York</h3>
                <p className='card__date'>Fri 27 Nov 2016</p>
                <p className='cart__text'>
                  Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                </p>
                <button className='btn'>Buy tickets</button>
              </div>
            </li>
            {/* one card */}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
