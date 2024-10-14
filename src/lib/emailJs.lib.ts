import emailjs from '@emailjs/browser';

const sendEmail = async (from_name: string) => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return false;
  }
};

export default sendEmail;
