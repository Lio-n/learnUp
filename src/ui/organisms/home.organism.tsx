import Bubble from '../atoms/Bubble';

export default function Home() {
  return (
    <section id="home" className="relative max-w-7xl group mx-auto">
      <div className=" w-full mx-auto relative z-[1] text-white-smoke px-5 lg:px-0 py-72 md:pt-72 md:pb-80">
        <h1 className="text-2xl md:text-7xl">Welcome to LearnUp!</h1>
        <p className="text-sm my-3 md:text-2xl md:my-5">Learn Together, Grow Together.</p>
        <ul className="text-xs md:text-lg">
          <li className="flex items-start gap-2 py-1">
            <span className="w-0 h-0 border-l-[6px] md:border-l-[8px] border-l-transparent border-b-[10px] md:border-b-[12px] border-b-violet-blue border-r-[6px] md:border-r-[8px] border-r-transparent md:pt-2"></span>
            Freedom to explore a variety of fascinating topics.
          </li>
          <li className="flex items-start gap-2 py-1">
            <span className="w-0 h-0 border-l-[6px] md:border-l-[8px] border-l-transparent border-b-[10px] md:border-b-[12px] border-b-violet-blue border-r-[6px] md:border-r-[8px] border-r-transparent md:pt-2"></span>
            Here you can learn without limits.
          </li>
          <li className="flex items-start gap-2 py-1">
            <span className="w-0 h-0 border-l-[6px] md:border-l-[8px] border-l-transparent border-b-[10px] md:border-b-[12px] border-b-violet-blue border-r-[6px] md:border-r-[8px] border-r-transparent md:pt-2"></span>
            You can be an avid Learner in search of knowledge <br />— or a creative Creator ready to share your
            experience.
          </li>
        </ul>
      </div>

      <Bubble
        variant="illuminated"
        color="bg-lavender-indigo"
        size="medium"
        className="absolute transition-transform duration-[1200ms] group-hover:translate-y-3 bottom-[5%] left-[-60%] md:w-[415px] md:h-[415px] md:bottom-[-15%] md:left-[-5%]"
      />
      <Bubble
        color="bg-violet-blue"
        size="large"
        className="absolute transition-transform duration-1000 group-hover:translate-y-3 hidden md:block md:top-[-5%] md:right-[-10%]"
      />
      <Bubble
        color="bg-eerie-black"
        size="small"
        variant="illuminated"
        className="absolute transition-transform duration-1000 group-hover:translate-y-2 top-[20%] left-[-10%] md:w-[746px] md:h-[746px]  md:top-[10%] md:left-[8%]"
      />
      <Bubble
        size="tiny"
        variant="illuminated"
        color="bg-violet-blue"
        className="absolute transition-transform duration-1000 group-hover:translate-y-2 left-[60%] bottom-[70%] md:bottom-[30%] md:left-[50%]"
      />
      <Bubble
        variant="illuminated"
        color="bg-lavender-indigo"
        className="absolute transition-transform duration-[1200ms] group-hover:translate-y-3 top-32 hidden md:block md:top-[-10%] md:right-[-15%]"
      />
      <Bubble
        variant="illuminated"
        color="bg-lavender-indigo"
        size="little"
        className="absolute transition-transform duration-[1200ms] group-hover:translate-y-5 hidden md:block md:top-[18%] md:left-[15%]"
      />
      <Bubble
        color="bg-lavender-indigo"
        size="tiny"
        className="absolute transition-transform duration-[1200ms] group-hover:translate-y-3 hidden md:block md:top-[25%] md:left-[25%]"
      />
    </section>
  );
}
