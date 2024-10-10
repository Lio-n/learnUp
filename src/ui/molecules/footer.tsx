import owlLogo from "../../assets/owl-white.png";
import linkedinLogo from "../../assets/linkedin.png";
import githubLogo from "../../assets/github.png";
import Bubble from "../atoms/Bubble";

function Footer({}) {
  return (
    <footer className="w-[85%] lg:w-full">
      <div className="bg-eerie-black min-w-[350px] flex flex-col p-[15px] gap-[40px] lg:flex-row lg:h-[400px] lg:w-full lg:justify-between">
        <div className="w-full grid gap-[25px] lg:gap-[10px] lg:h-[300px] lg:w-[480px]">
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
        <div className="flex text-white text-left justify-between max-w-[400px] lg:gap-[50px]">
          <div className="grid gap-[10px]">
            <p className="text-[20px]">Developed by</p>
            <span className="flex justify-around gap-[15px]">
              <p className="w-[145px]">Leandro Fontan</p>
              <a href="https://github.com/Lio-n">
                <img
                  className="object-scale-down"
                  src={githubLogo}
                  alt="social"
                />
              </a>
              <a href="https://www.linkedin.com/in/leonardo-fontan/">
                <img
                  className="object-scale-down"
                  src={linkedinLogo}
                  alt="social"
                />
              </a>
            </span>
            <span className="flex justify-around gap-[15px]">
              <p className="w-[145px]">Lucas Frezzini</p>
              <a href="https://github.com/lucasfrezzini">
                <img
                  className="object-scale-down"
                  src={githubLogo}
                  alt="social"
                />
              </a>
              <a href="https://www.linkedin.com/in/lucasfrezzini">
                <img
                  className="object-scale-down"
                  src={linkedinLogo}
                  alt="social"
                />
              </a>
            </span>
            <span className="flex justify-around gap-[15px]">
              <p className="w-[145px]">Santiago Miranda</p>
              <a href="https://github.com/santiago-mir">
                <img
                  className="object-scale-down"
                  src={githubLogo}
                  alt="social"
                />
              </a>
              <a href="https://www.linkedin.com/in/santiago-miranda-a23304239/">
                <img
                  className="object-scale-down"
                  src={linkedinLogo}
                  alt="social"
                />
              </a>
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
      </div>
    </footer>
  );
}
export default Footer;
