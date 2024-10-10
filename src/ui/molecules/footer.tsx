import owlLogo from "../../assets/owl-white.png";
import linkedinLogo from "../../assets/linkedin.png";
import githubLogo from "../../assets/github.png";
import Bubble from "../atoms/Bubble";

function Footer({}) {
  return (
    <footer className="bg-eerie-black max-w-[500px] min-w-[350px] min-h-[650px] flex flex-col p-[15px] gap-[40px] w-[80%]">
      <div className="w-full grid gap-[25px]">
        <img className="w-[50px]" src={owlLogo} alt="logo" />
        <h2 className="text-white text-4xl text-left">
          Register for Exclusive Access
        </h2>
        <form className="flex gap-[5px]">
          <input
            className="max-w-[350px] placeholder-black text-base p-[5px] flex-grow"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <button className="bg-black text-white border border-white rounded-none">
            Suscribe
          </button>
        </form>
      </div>
      <div className="flex text-white justify-between max-w-[400px]">
        <div className="grid gap-[10px]">
          <p>Developed by</p>
          <span className="flex gap-[20px]">
            Leandro Fontan{" "}
            <img className="object-contain" src={githubLogo} alt="social" />{" "}
            <img className="object-contain" src={linkedinLogo} alt="social" />
          </span>
          <span className="flex gap-[20px]">
            Leandro Fontan{" "}
            <img className="object-contain" src={githubLogo} alt="social" />{" "}
            <img className="object-contain" src={linkedinLogo} alt="social" />
          </span>
          <span className="flex gap-[20px]">
            Leandro Fontan{" "}
            <img className="object-contain" src={githubLogo} alt="social" />{" "}
            <img className="object-contain" src={linkedinLogo} alt="social" />
          </span>
          <span className="flex gap-[20px]">
            Leandro Fontan{" "}
            <img className="object-contain" src={githubLogo} alt="social" />{" "}
            <img className="object-contain" src={linkedinLogo} alt="social" />
          </span>
        </div>
        <nav className="grid">
          <a href="">Home</a>
          <a href="">How it works</a>
          <a href="">FAQs</a>
          <a href="">Contact</a>
        </nav>
      </div>
      <Bubble
        className="self-center"
        size="tiny"
        variant="default"
        color="bg-violet-blue"
      ></Bubble>
      <Bubble size="tiny" variant="default" color="bg-violet-blue"></Bubble>
    </footer>
  );
}
export default Footer;
