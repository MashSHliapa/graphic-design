import './Up.scss'
import vector_up from '../../images/vector_up.png'

export function Up() {
  return (
    <div className="up">
      <div className="up__container _container">
        <div className="up__body">
          <div className="up__vector">
            <img src={vector_up} alt="vector" />
          </div>
          <div className="up__title">
            <a href="#">Наверх</a>
          </div>
        </div>
      </div>
    </div>
  )
}
