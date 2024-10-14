import { SideBarMenu } from './sideBarMenu.component';

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 z-10 fixed w-full backdrop-blur-[1px]">
      <div className="md:hidden">
        <SideBarMenu />
      </div>

      <img className="w-8 md:hidden" src="/learnup-favicon.ico" alt="logo" />

      <nav className="anchor_animated hidden md:mx-auto md:my-0 md:flex gap-4 justify-around items-center">
        <a href="/#home">Home</a>
        <a href="/#how-it-works">How it works</a>
        <img className="w-16" src="/learnup-favicon.ico" alt="logo" />
        <a href="/#FAQs">FAQs</a>
        <a href="/#footer">Contact</a>
      </nav>
    </header>
  );
}
