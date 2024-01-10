export default function Card2() {
  return (
    <li className='band-card'>
      <img className='card__img' src='/img/paris.jpg' alt='paris' />
      <div className='card__info'>
        <h3 className='card__title'>Paris</h3>
        <p className='card__date'>Fri 28 Nov 2016</p>
        <p className='cart__text'>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
        </p>
        <button className='btn'>Buy</button>
      </div>
    </li>
  );
}
