import './App.css';

function Btn() {
  const btnName = 'Pirkti bilietus';

  return <button className='btn'>{btnName}</button>;
}

const title = <h3 className='card__title'>New York</h3>;

function SingleCard1() {
  return (
    <li className='band-card'>
      <img className='card__img' src='/img/newyork.jpg' alt='paris' />
      <div className='card__info'>
        <h3 className='card__title'>New York</h3>
        <p className='card__date'>Fri 27 Nov 2016</p>
        <p className='cart__text'>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
        </p>
        <Btn />
      </div>
    </li>
  );
}

function App() {
  const mainTitle = 'Turo datos';

  return (
    <div className='App'>
      <section className='bands-section'>
        <div className='container'>
          <h2 className='section__title'>{mainTitle}</h2>
          <p className='section__subtitle'>Remember to book your tickets!</p>

          <ul className='unlisted grid'>
            <SingleCard1 />
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
