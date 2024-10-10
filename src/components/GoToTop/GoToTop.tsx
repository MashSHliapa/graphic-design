// import vector_up from '../../images/vector_up.png'
import vector_up from '../../icons/vector_up.svg'
// import green_button_up from '../../images/green_vector_up.png'
import green_button_up from '../../icons/green_vector_up.svg'
import './GoToTop.scss'

export function GoToTop() {
  window.addEventListener('scroll', function () {
    let isButtonVisible = false;
    const goToTopGreenButton = document.querySelector('.go-to-top__green-button');
    const scrollThreshold = window.innerWidth < 575.98 ? 300 : 700;

    if (window.innerWidth < 767.98 && window.scrollY > scrollThreshold && !isButtonVisible) {
      console.log(1)
      goToTopGreenButton?.classList.add('_active');
      isButtonVisible = true;
    } else if (window.scrollY < 900) {
      goToTopGreenButton?.classList.remove('_active');
      isButtonVisible = false;
    }
  });

  return (
    <div className="go-to-top">
      <div className="go-to-top__box" onClick={() => window.scrollTo(0, 0)}>
        <div className="go-to-top__image">
          <img src={vector_up} alt="vector" />
        </div>
        <div className="go-to-top__title">наверх</div>
      </div>

      <div className="go-to-top__green-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src={green_button_up} alt="vector" />
      </div>
    </div >
  )
}
