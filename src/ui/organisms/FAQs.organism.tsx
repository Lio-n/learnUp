import { useState } from 'react';
import Bubble from '../atoms/Bubble';
import illustrationFAQs from '../../assets/illustrations/illustration_FAQs.svg';

type FAQ = { question: string; answer: string };
const FAQItem = ({ question, answer }: FAQ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 py-2">
      <button
        className="flex items-center justify-between w-full text-left text-xl transition duration-300 hover:text-gray-200"
        onClick={toggleFAQ}
      >
        <span className="pb-2 text-base md:text-lg font-semibold">{question}</span>
        <svg
          className="w-6 h-6 flex-shrink-0 transition duration-300 self-baseline"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
          )}
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <p className="mt-2 text-sm">{answer}</p>
      </div>
    </div>
  );
};

export const FAQs = () => {
  const faqs: FAQ[] = [
    {
      question: 'What is LearnUp?',
      answer:
        'LearnUp is an interactive course platform that focuses on collaboration between users. We offer a real-time space where students can work together, share ideas and learn in a more dynamic way.',
    },
    {
      question: 'What differentiates LearnUp from other course platforms?',
      answer:
        'Unlike other platforms, LearnUp places a special emphasis on user interaction. Our real-time collaborative space allows students to share knowledge, solve problems together and support each other during the learning process.',
    },
    {
      question: 'What are the types of courses available on LearnUp?',
      answer:
        'We are currently developing a variety of courses in areas such as programming, design, digital marketing and more. We are also open to users suggesting topics for future courses.',
    },
    {
      question: 'How does the real-time collaboration space work?',
      answer:
        'Our collaborative space allows students to work together on projects, discuss lessons in real time and support each other through interactive forums and collaborative tools. It all happens within the platform, without the need for external applications.',
    },
    {
      question: ' How can I register with LearnUp?',
      answer:
        'LearnUp is currently under development, but you can register by entering your email address in the form on our home page. This way, you will receive updates on the progress of the project and will be notified when the release is available, along with upcoming courses.',
    },
  ];

  return (
    <section id="FAQs" className="max-w-7xl mx-auto my-0 relative grid lg:grid-cols-2 p-4">
      <div className="relative">
        <div className="pb-8">
          <h3 className="pb-2 text-3xl font-semibold">Common Questions.</h3>
          <p className="text-sm font-normal">
            Have questions about LearnUp? Here are the answers to some of the most frequently asked questions to help
            you understand how our platform works and what you can expect.
          </p>
        </div>

        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
        <Bubble
          variant="illuminated"
          color="bg-violet-blue"
          size="large"
          className="z-[-1] absolute max-lg:hidden top-[3rem] left-[-2rem] max-lg:size-[25rem] lg:top-[-8rem] lg:left-[-5rem]"
        />
      </div>

      <div className="relative max-lg:hidden">
        <img src={illustrationFAQs} alt="illustration FAQs" className="size-[30rem]" />
        <Bubble
          variant="illuminated"
          color="bg-eerie-black"
          size="large"
          className="z-[-1] absolute top-[3rem] left-[-2rem] max-lg:size-[25rem] lg:top-[-8rem] lg:left-[-8rem]"
        />
      </div>

      <div className="max-lg:hidden">
        <Bubble
          variant="illuminated"
          color="bg-lavender-indigo"
          size="small"
          className="z-[-2] absolute left-[60rem] top-[20rem]"
        />
      </div>
    </section>
  );
};
