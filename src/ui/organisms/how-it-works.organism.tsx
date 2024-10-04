import MakeItYourOwnVideo from '../../assets/make-it-your-own.mp4';
import EnjoyYourTimeVideo from '../../assets/enjoy-your-time.mp4';
import ThinkTogetherVideo from '../../assets/think-together.mp4';
import Bubble from '../atoms/Bubble';

export const HowItWorks = () => {
  type Product = {
    title: string;
    description: string;
    source: { video: string; alt: string; figure_container: string };
  };
  const data: Product[] = [
    {
      title: 'Make it your own',
      description: 'Decorate your space. Upload your own wallpaper, choose an animated avatar.',
      source: { video: MakeItYourOwnVideo, alt: 'make-it-your-own.mp4', figure_container: 'rhombus' },
    },
    {
      title: 'Enjoy your time',
      description: 'Who said meeting online has to be boring? Make your space memorable.',
      source: { video: EnjoyYourTimeVideo, alt: 'enjoy-your-time.mp4', figure_container: 'circle' },
    },
    {
      title: 'Think together',
      description: 'Use sticky notes, white boards, and collaborative notepads to think together.',
      source: { video: ThinkTogetherVideo, alt: 'think-together.mp4', figure_container: 'triangle' },
    },
  ];

  return (
    <section id="how-it-works" className="max-w-7xl mx-auto my-0 relative">
      <ul className="p-4 grid max-md:place-items-center text-center gap-10 md:grid-cols-3 md:grid-rows-[repeat(1,_minmax(0,_30rem))] md:gap-0">
        {data.map((item, i) => (
          <li>
            <div className="grid place-items-center md:h-full md:content-between">
              <div className={`max-md:pb-2 ${i === 0 || i === 2 ? 'md:pb-20' : 'md:pt-20'}`}>
                <h3 className="pb-2 text-3xl font-semibold italic">{item.title}</h3>
                <p className="text-sm font-normal">{item.description}</p>
              </div>

              <video
                className={`size-72 md:size-60 ${item.source.figure_container} 
                    ${i === 0 || i === 2 ? 'md:order-first' : 'md:order-last'}
                    `}
                tabIndex={-1}
                playsInline={true}
                autoPlay={true}
                muted={true}
                loop={true}
                width="100%"
              >
                <source src={item.source.video} type="video/mp4" />
              </video>
            </div>
          </li>
        ))}
      </ul>
      <div className="absolute top-[20%] left-[20%]">
        <Bubble
          variant="illuminated"
          color="bg-violet-blue"
          size="little"
          className="z-[-1] absolute transition-transform duration-[1200ms] group-hover:translate-y-5 md:block top-[20%] left-[10rem]"
        />
        <Bubble
          color="bg-violet-blue"
          size="tiny"
          className="z-[-1] absolute transition-transform duration-[1200ms] group-hover:translate-y-3 md:block top-[15rem] left-[10rem]"
        />
        <Bubble
          color="bg-violet-blue"
          size="tiny"
          variant="illuminated"
          className="z-[-1] absolute transition-transform duration-[1200ms] group-hover:translate-y-3  md:block top-[10rem] left-[30%]"
        />
      </div>

      <div className="absolute bottom-[30%] right-[10%]">
        <Bubble
          variant="illuminated"
          color="bg-lavender-indigo"
          size="little"
          className="z-[-1] absolute transition-transform duration-[1200ms] group-hover:translate-y-5 md:block top-[20%] left-[0]"
        />
        <Bubble
          color="bg-lavender-indigo"
          size="tiny"
          className="z-[-1] absolute transition-transform duration-[1200ms] group-hover:translate-y-3 md:block top-[-5rem] left-[-15rem]"
        />
        <Bubble
          color="bg-lavender-indigo"
          size="tiny"
          variant="illuminated"
          className="z-[-1] absolute transition-transform duration-[1200ms] group-hover:translate-y-3  md:block top-[5rem] left-[-8rem]"
        />
      </div>
    </section>
  );
};
