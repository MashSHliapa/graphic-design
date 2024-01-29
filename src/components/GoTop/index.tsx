import vector_up from '../../images/vector_up.png'
import green_button_up from '../../images/green_vector_up.png'
import './GoTop.scss'

export function GoTop() {

  window.addEventListener('scroll', function () {
    let isButtonVisible = false;
    const goTopGreenButton = document.querySelector('.go-top__green-button');

    if (window.innerWidth < 767.98 && window.scrollY > 900 && !isButtonVisible) {
      console.log(1)
      goTopGreenButton?.classList.add('_active');
      isButtonVisible = true;
    } else if (window.scrollY < 900) {
      goTopGreenButton?.classList.remove('_active');
      isButtonVisible = false;
    }
  });


  return (
    <div className="go-top">
      <div className="go-top__container _container">
        <div className="go-top__box" onClick={() => window.scrollTo(0, 0)}>
          <div className="go-top__image">
            <img src={vector_up} alt="vector" />
          </div>
          <div className="go-top__title">наверх</div>
        </div>

        <div className="go-top__green-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={green_button_up} alt="vector" />
        </div>
      </div>
    </div >
  )
}
