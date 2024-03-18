import React,{useState} from 'react'
import styles from "./LightNavbar.module.css";
import { NavLink } from 'react-router-dom';
import { login_img,search_img,cart_img,likes_img,toggle_btn_img } from '../../../../assets/images';

const LightNavbar = () => {
    const [navbarVisible, setNavbarVisible] = useState(false);

    const toggleNavbar = () => {
      setNavbarVisible(!navbarVisible);
    };
  
  return (
    <React.Fragment>
        <div className={styles["ligh-navbar"]}>
        <div className={styles["container"]}>
          <div className={styles["logo"]}>
            {/* <img src={logo} alt="logo" className={styles["logo-img"]} /> */}
            <p className={styles["logo-text"]}>Bandage</p>
          </div>
          <div
            className={`${styles["nav-container"]} ${
              navbarVisible ? styles["active"] : ""
            }`}
            id="navbar"
          >
            <div className={styles["nav-links-container"]}>
              <nav className={styles["nav-links"]}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="#">
                  <select className={styles["select-button"]}>
                    <option value="shop">Shop</option>
                  </select>
                </NavLink>
                <NavLink to="/about-us">About</NavLink>
                <NavLink to="/blogs">Blog</NavLink>
                <NavLink to="/contact-us">Contact</NavLink>
                <NavLink to="/pages">Pages</NavLink>
              </nav>
            </div>
            <div className={styles["nav-buttons-container"]}>
              <div className={styles["nav-buttons"]}>
                <button className={styles["button"]}>
                  <img src={login_img} alt="" />
                  <p>Login / Register</p>
                </button>
                <button className={styles["button"]}>
                  <img src={search_img} alt="" />
                </button>
                <button className={styles["button"]}>
                  <img src={cart_img} alt="" />
                  <p>1</p>
                </button>
                <button className={styles["button"]}>
                  <img src={likes_img} alt="" />
                  <p>1</p>
                </button>
              </div>
            </div>
          </div>
          <div className={styles["toggle-btn-container"]}>
            <button onClick={toggleNavbar}>
              <img src={toggle_btn_img} alt="" />
            </button>
          </div>
        </div>
      </div> 
    </React.Fragment>
  )
}

export default LightNavbar