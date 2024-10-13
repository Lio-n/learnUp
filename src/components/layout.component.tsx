import { Footer } from './footer.component';
import { Header } from './header.component';

export const Layout = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
