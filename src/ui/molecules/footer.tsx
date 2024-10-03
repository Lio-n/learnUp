import owlLogo from "../../assets/owl-white.png";
import linkedinLogo from "../../assets/linkedin.png";
import githubLogo from "../../assets/github.png";

function Footer({}) {
  return (
    <footer className="bg-eerie-black max-w-[500px] min-h-[500px] flex flex-col p-[15px] ">
      <div className="grid gap-[10px]">
        <img className="w-[50px]" src={owlLogo} alt="logo" />
        <h2 className="text-white">Register for Exclusive Access</h2>
        <form className="flex gap-[5px]">
          <input type="email" name="email" />
          <button className="">Suscribe</button>
        </form>
      </div>
      <div className="flex text-white">
        <div className="grid gap-[10px]">
          <p>Developed by</p>
          <span className="flex gap-[5px]">
            Leandro Fontan <img src={githubLogo} alt="social" />{" "}
            <img src={linkedinLogo} alt="social" />
          </span>
          <span className="flex gap-[5px]">
            Leandro Fontan <img src={githubLogo} alt="social" />{" "}
            <img src={linkedinLogo} alt="social" />
          </span>
          <span className="flex gap-[5px]">
            Leandro Fontan <img src={githubLogo} alt="social" />{" "}
            <img src={linkedinLogo} alt="social" />
          </span>
          <span className="flex gap-[5px]">
            Leandro Fontan <img src={githubLogo} alt="social" />{" "}
            <img src={linkedinLogo} alt="social" />
          </span>
        </div>
        <nav className="grid">
          <a href="">Home</a>
          <a href="">How it works</a>
          <a href="">FAQs</a>
          <a href="">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
