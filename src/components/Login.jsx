import Header from "./Header";
import React from "react";
import { useLocation} from "react-router-dom";
import { NavLink } from "react-router-dom";

function Login() {
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
                <div>
                  <label className="col-sm-2 control-label">Eposta:</label>
                  <div className="col-sm-10">
                    <input
                      className="review form-control"
                      name="email"
                      type="text"
                    />
                  </div>
                </div>
                <div className="spacer"></div>
                <label className="col-sm-2 control-label">Şifre:</label>
                <div className="col-sm-10">
                  <input
                    className="review form-control"
                    name="password"
                    type="password"
                  />
                </div>
              </div>
              <div className="two-buttons">
                <NavLink to="/register" className="btn btn-default" activeClassName="active">
                  Kayıt ol
                </NavLink>
                <button className="btn btn-primary w-100">Giriş yap</button>
              </div>

            </form>
          </div>
        </div>
      </>
    );
}
export default Login;
