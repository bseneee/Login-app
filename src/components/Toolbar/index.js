import React from "react";

import css from "./style.module.css";
import Menu from "../Menu";

const Toolbar = props => (
  <header className={css.Toolbar}>
    <h1>INVESCORE</h1>
    <nav className={css.HideOnMobile}>
      <Menu />
    </nav>
  </header>
);

export default Toolbar;
