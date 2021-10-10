import ContactIcons from '../ContactIcons';
import Icon from '../../atoms/Icon'
import Menu from '../Menu';
import css from './navbar.module.css';

export default function NavBar() {

  return (
    <nav>
      <div className={css.navbarContainer}>

      <Icon
        title="Iberê' s home"
        href='/'
        label=''
        iconSrc="/icons/ibere.jpeg"
      />
        <Menu />
        <ContactIcons />
        
      </div>
    </nav >
  );
};
