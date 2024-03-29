import React, { useState } from 'react';
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [burger, setBurger] = useState(false)
  const resetToken = () => {
    localStorage.removeItem('token');

  }

  const onSelect = (event) => {
    // Bu fonksiyonun içeriğini doldurun
    console.log(event.target.getAttribute('lang-selection'));
  };
  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <section className="navbar__left1">
          <NavLink to={'/'}><h1 className='navbar__a'>OfisArt</h1></NavLink>
        </section>
        <section className="navbar__center">
          <div className="menu">
            {/* <div className="menu__header">
              <span className="menu__arrow"><i className="bx bx-chevron-left"></i></span>
              <span className="menu__title"></span>
            </div> */}
            <u className="menu__inner">
              <li className="menu__item menu__dropdown">
                <a href="" className="menu__link">
                  {t('products')}
                  <i class="fa-solid fa-angle-up"></i>
                  {/* <i className="bx bx-chevron-right"></i> */}
                </a>
                <div className="submenu megamenu__text">
                  <div className="submenu__inner">
                    <h4 className="submenu__title">{t('table')}</h4>
                    <ul className="submenu__list">
                      <Link to={'/menagerdesk'}><li>{t('manager')}</li></Link>
                      <Link to={'/stafftable'}><li>İşçi masaları</li></Link>
                      <Link to={'/meetingtable'}><li>İclas masaları</li></Link>
                      <Link to={'/homeofficedesk'}><li>Home ofis masaları</li></Link>
                      <Link to={'/magazinetable'}><li>Jurnal masaları</li></Link>

                    </ul>
                  </div>


                  <div className="submenu__inner">
                    <h4 className="submenu__title">Divan/Kreslo</h4>
                    <ul className="submenu__list">
                      <Link to={'/executivechair'}><li>Menecer kresloları</li></Link>
                      <Link to={'/staffchair'}><li>İşçi kresloları</li></Link>
                      <Link to={'/sofa'}><li>Divanlar</li></Link>
                    </ul>
                  </div>




                  <div className="submenu__inner">
                    <h4 className="submenu__title">Dolab</h4>
                    <ul className="submenu__list">
                      <Link to={'/wardrobe'}><li>Rəfli dolablar</li></Link>
                      <Link to={'/filingcabinet'}><li>Sənəd dolabları</li></Link>
                      <Link to={'/tumba'}><li>Tumbalar</li></Link>
                      <Link to={'/dresser'}><li>Kamodlar</li></Link>

                    </ul>
                  </div>



                  <div className="submenu__inner">
                    <h4 className="submenu__title">Digər</h4>
                    <ul className="submenu__list">
                      <Link to={'/hanger'}><li>Paltar asqılıqları</li></Link>
                      <Link to={'/accessory'}><li>Aksesuarlar</li></Link>
                    </ul>
                  </div>

                  {/* Diğer alt menüler */}
                </div>
              </li>
              <li className="menu__item"><Link to={'/project'}><a href="#" className="menu__link">{t('projectsf')}</a></Link></li>
              <li className="menu__item menu__dropdown">
                <Link to={'/aboutus'}><li>{t('about')}</li></Link>
              </li>
              <li className="menu__item menu__dropdown">
                <a href="#" className="menu__link">
                  {t('contact')}
                  <i class="fa-solid fa-angle-up"></i>
                </a>
                <div className="submenu megamenu__normal">
                  <ul className="submenu__list">
                    <Link to={'/login'}><li>Login</li></Link>
                    <Link><li onClick={resetToken}>Log out</li></Link>
                  </ul>
                </div>
              </li>
              {/* <li className="menu__item"><a href="#" className="menu__link">Support</a></li> */}
            </u>
          </div>
        </section>
        <section className="navbar__right">
          <button onClick={() => i18n.changeLanguage("az")}>az</button>
          <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
          <button onClick={() => i18n.changeLanguage("en")}>en</button>
        </section>
        <div className='burgerMenu'>
          <RxHamburgerMenu className='burgerIcon' onClick={() => { setBurger(!burger) }} />
        </div>
        <ul className={`burgerList ${burger ? 'burgerOpen' : 'burgerClose'}`}>
          <hr />
          <Link to={'/bestseller'}><li>{t('products')}</li></Link>
          <hr />
          <Link to={'/project'}><li>{t('projectsf')}</li></Link>
          <hr />
          <Link to={'/aboutus'}><li>{t('about')}</li></Link>
          <hr />
          <li>{t('contact')}
          </li>
          <hr />
          <section className="navbar__right">
            <button onClick={() => i18n.changeLanguage("az")}>az</button>
            <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
            <button onClick={() => i18n.changeLanguage("en")}>en</button>
          </section>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
