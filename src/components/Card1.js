export default function Card1() {
  return (
    <li className='band-card'>
      <img className='card__img' src='/img/newyork.jpg' alt='paris' />
      <div className='card__info'>
        <h3 className='card__title'>New York</h3>
        <p className='card__date'>Fri 27 Nov 2016</p>
        <p className='cart__text'>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
        </p>
        <button className='btn'>Buy</button>
      </div>
    </li>
  );
}
