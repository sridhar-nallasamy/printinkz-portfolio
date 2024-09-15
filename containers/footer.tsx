'use client';

import { footerContents } from '@/constants/footer';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { IconButton, TextField } from '@mui/material';
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
      className={`w-full lg:h-[10vh] bg-[#FF9E21] border-4 border-black rounded-[2rem] flex flex-col gap-2 md:flex-row items-center justify-around p-4`}
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
          size="small"
        />
        <IconButton className="rounded-full bg-black text-[#FF9E21]">
          <SendRoundedIcon />
        </IconButton>
      </form>
      <div className="flex flex-row gap-2 items-center justify-around">
        <div className="text-2xl font-extrabold">Contact Us!</div>
        <div className="flex flex-row gap-2 items-center justify-around">
          {footerContents.contactUs.map((item) => (
            <IconButton
              className="rounded-full bg-black text-[#FF9E21]"
              href={item.url}
              target="_blank"
              key={item.title}
            >
              <item.icon />
            </IconButton>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
