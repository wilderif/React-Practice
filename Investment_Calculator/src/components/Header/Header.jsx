import "./Header.css";
import logo from "../../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
