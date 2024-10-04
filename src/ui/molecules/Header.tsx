import owlLogo from "../../assets/owl-white.png";
import menu from "../../assets/ham-menu.svg";

function Header({}) {
  return (
    <header className="bg-eerie-black flex justify-between md:justify-center p-2.5 max-h-20">
      <img className="block md:hidden header-logo" src={menu} alt="menu" />
      <img className="block md:hidden header-logo" src={owlLogo} alt="logo" />
      <nav className="hidden md:flex md:w-[55%] lg:flex lg:w-[55%] justify-around items-center">
        <a href="">Home</a>
        <a href="">How it works</a>
        <img
          className="header-logo w-16 h-16 object-contain"
          src={owlLogo}
          alt=""
        />
        <a href="">FAQs</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
