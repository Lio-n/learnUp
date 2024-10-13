import linkedinLogo from '../assets/logos/linkedin.svg';
import githubLogo from '../assets/logos/github.svg';

export function Footer() {
  return (
    <footer id="footer" className="px-4 pt-4 pb-8 lg:px-16 lg:pt-16 lg:pb-32">
      <div className="max-w-7xl lg:justify-between lg:flex mx-auto my-0">
        <div className="w-full grid gap-4 lg:max-w-lg ">
          <img className="w-[50px]" src="/learnup-favicon.ico" alt="logo" />
          <h3 className="text-white text-4xl">Register for Exclusive Access</h3>
          <form className="flex gap-4">
            <input
              className="w-full text-eerie-black placeholder-eerie-black text-base p-2"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className="bg-eerie-black text-white border border-white p-2 transition-colors hover:bg-lavender-indigo">
              Suscribe
            </button>
          </form>
        </div>

        <div className="flex justify-around mt-8 flex-wrap gap-4 lg:items-baseline lg:gap-16">
          <div className="grid gap-[10px]">
            <h3 className="text-lg">Developed by</h3>
            <span className="flex justify-around gap-[15px]">
              <p className="w-[145px]">Leandro Fontan</p>
              <a target="_black" href="https://github.com/Lio-n">
                <img className="w-6" src={githubLogo} alt="social" />
              </a>
              <a target="_black" href="https://www.linkedin.com/in/leonardo-fontan/">
                <img className="w-6" src={linkedinLogo} alt="social" />
              </a>
            </span>
            <span className="flex justify-around gap-[15px]">
              <p className="w-[145px]">Lucas Frezzini</p>
              <a target="_black" href="https://github.com/lucasfrezzini">
                <img className="w-6" src={githubLogo} alt="social" />
              </a>
              <a target="_black" href="https://www.linkedin.com/in/lucasfrezzini">
                <img className="w-6" src={linkedinLogo} alt="social" />
              </a>
            </span>
            <span className="flex justify-around gap-[15px]">
              <p className="w-[145px]">Santiago Miranda</p>
              <a target="_black" href="https://github.com/santiago-mir">
                <img className="w-6" src={githubLogo} alt="social" />
              </a>
              <a target="_black" href="https://www.linkedin.com/in/santiago-miranda-a23304239/">
                <img className="w-6" src={linkedinLogo} alt="social" />
              </a>
            </span>
          </div>

          <nav className="anchor_animated">
            <a href="/#home">Home</a>
            <a href="/#how-it-works">How it works</a>
            <a href="/#FAQs">FAQs</a>
            <a href="/#footer">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
