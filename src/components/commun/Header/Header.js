import logo from "../../../SamplePhotos/logo.svg";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="main-title">Nos photographes</h1>
    </div>
  );
}

export default Header;
