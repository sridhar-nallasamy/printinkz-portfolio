'use client';

import CustomButton from '@/components/customButton';
import { TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';

const Footer = () => {
  const [mail, setEmail] = useState<string>('');
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value != null) {
      setEmail(() => e.target.value);
    }
  }
  return (
    <footer
      className={`w-full min-h-[10vh] bg-[#FF9E21] border-4 border-black rounded-[2rem] flex flex-col sm:flex-row items-center justify-around p-4`}
    >
      <div className="text-2xl font-extrabold">Be the first one to know!</div>
      <form className="flex items-center gap-2" id="subscription-form">
        <TextField
          id="subscriberEmail"
          label="E-mail"
          variant="outlined"
          placeholder="Enter your e-mail"
          required
          onChange={handleOnChange}
          value={mail}
          type="email"
          color="primary"
        />
        <CustomButton
          type="submit"
          title="Subscribe"
          className="rounded-full bg-black text-[#FF9E21]"
        />
      </form>
      <div className="text-2xl font-extrabold">Contact Us!</div>
    </footer>
  );
};

export default Footer;
