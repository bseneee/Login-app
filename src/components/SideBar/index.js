import React from "react";

import css from "./style.module.css";
import Menu from "../Menu";

const SideBar = props => {
  let classes = [css.SideBar, css.Close];

  if (props.showSidebar) {
    classes = [css.SideBar, css.Open];
  }

  return (
    <div>

      <div onClick={props.toggleSideBar} className={classes.join(" ")}>
        <div>Invescore</div>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
