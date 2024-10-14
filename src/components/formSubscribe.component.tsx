import { useState } from 'react';
import sendEmail from '../lib/emailJs.lib';
import loadingButton from '../utils/loadingButton.utils';

const AlertMessages = {
  success: { colorText: 'text-cyan-300', text: 'Email sended!' },
  fail: { colorText: 'text-rose-500', text: 'Oops something went wrong!' },
};

const FormSubscribe = () => {
  const [alertSubmit, setAlertSubmit] = useState<{ colorText: string; text: string } | null>();

  const handleSendEmail = async (email: string) => {
    loadingButton({ buttonId: 'form_contact__submit_btn', isLoading: true });

    const isEmailSended = await sendEmail(email);

    loadingButton({ buttonId: 'form_contact__submit_btn', isLoading: false });

    if (isEmailSended) {
      setAlertSubmit(AlertMessages.success);
    } else {
      setAlertSubmit(AlertMessages.fail);
    }

    setTimeout(() => setAlertSubmit(null), 5000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const email = (e.target as any).email.value;

    handleSendEmail(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <div>
        <input
          className="w-full text-eerie-black placeholder-eerie-black text-base p-2 relative"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        {alertSubmit && <p className={`absolute text-center pt-2 ${alertSubmit.colorText}`}>{alertSubmit.text}</p>}
      </div>

      <button
        id="form_contact__submit_btn"
        className="bg-eerie-black text-white border border-white p-2 transition-colors hover:bg-lavender-indigo"
      >
        Subscribe
      </button>
    </form>
  );
};

export default FormSubscribe;
