import { NavLink } from 'react-router-dom';
import to_main from '../../icons/to_main.svg';
import './GoToMain.scss';

export function GoToMain() {
  return (
    <div className="go-to-main">
      <NavLink to="/" target="_top" className="go-to-main__body">
        <img src={to_main} alt="to_main" />
        <div className="go-to-main__text">на главную</div>
      </NavLink>
    </div>
  );
}
