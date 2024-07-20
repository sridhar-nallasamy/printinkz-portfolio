'use client';
import Button from '@/components/button';
import Input from '@/components/input';
import { ChangeEvent, useState } from 'react';

const Footer = () => {
  const [mail, setEmail] = useState<string>('');
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value != null) {
      setEmail((prevValue: string) => e.target.value);
    }
  }
  return (
    <div
      className={`bg-[#FF9E21] border-4 border-black rounded-[2rem] flex items-center justify-around p-4 mt-3`}
    >
      <div className="text-2xl font-extrabold">Be the first one to know!</div>
      <form className="flex items-center gap-2" id="subscription-form">
        <Input
          stateName="subscriberEmail"
          inputType="email"
          inputClassName="w-full"
          value={mail}
          placeholder="Enter your e-mail"
          required={true}
          onChange={handleOnChange}
        />
        <Button
          type="submit"
          title="=>"
          className="rounded-full bg-black text-[#FF9E21]"
        />
      </form>
      <div className="text-2xl font-extrabold">Contact Us!</div>
    </div>
  );
};

export default Footer;
