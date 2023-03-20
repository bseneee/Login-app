import React, { Fragment } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = props => (
  <div>
    <ul className={css.Menu}>
    
      {props.userId ? (
        <MenuItem link="/logout">ГАРАХ</MenuItem>
      ) : (
        <Fragment>
          <MenuItem link="/login">НЭВТРЭХ</MenuItem>
          <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
        </Fragment>
      )}
    </ul>
  </div>
);
const mapStateToProps = state => {
  return {
    userId: state.signupReducer.userId
  };
};
export default connect(mapStateToProps)(Menu);
