const CustomStyleText = 'w-fit underline-offset-8 decoration-2 decoration-dotted decoration-nero';

const NavigationLinks = ({ className = '' }) => {
  return (
    <div className={`anchor_animated flex flex-col gap-4 px-4 pt-12 ${className}`}>
      <a className={CustomStyleText} href="/#home">
        Home
      </a>
      <a className={CustomStyleText} href="/#how-it-works">
        How it works
      </a>
      <a className={CustomStyleText} href="/#FAQs">
        FAQs
      </a>
      <a className={CustomStyleText} href="/#footer">
        Contact
      </a>
    </div>
  );
};

export default NavigationLinks;
