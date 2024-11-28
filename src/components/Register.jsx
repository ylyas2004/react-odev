import Header from "./Header";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation} from "react-router-dom";
function Register() {
  let location = useLocation();
  const onSubmit = (evt) => {
    evt.preventDefault();
  };
    return (
      <>
        <Header headerText="Login"/>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <form
              className="form-horizontal"
              id="login"
              onSubmit={(evt) => onSubmit(evt)}
            >
              <div className="form-group">
              <label className="col-sm-2 control-label">Eposta:</label>
                <div className="col-sm-10">
                  <input
                    className="review form-control"
                    name="email"
                    type="text"
                  />
                </div>
                <label className="col-sm-2 control-label">Ad:</label>
                <div className="col-sm-10">
                  <input
                    className="review form-control"
                    name="firstname"
                    type="text"
                  />
                </div>
                <label className="col-sm-2 control-label">Soyad:</label>
                <div className="col-sm-10">
                  <input
                    className="review form-control"
                    name="surname"
                    type="text"
                  />
                </div>
              </div>
              <label className="col-sm-3 control-label">Şifre:</label>
              <div className="col-sm-3">
                <input
                  className="review form-control"
                  name="password1"
                  type="password"
                />
              </div>
              <label className="col-sm-3 control-label">Tekrar Şifre:</label>
              <div className="col-sm-3">
                <input
                  className="review form-control"
                  name="password2"
                  type="password"
                />
              </div>
              <div className="two-buttons-reg">
                    <NavLink to="/login" className="btn btn-default" activeClassName="active">
                    Giriş yap
                    </NavLink>
                    <button className="btn btn-primary w-100">Kayıt ol</button>
              </div>
              
            </form>
          </div>
        </div>
      </>
    );
}
export default Register;
