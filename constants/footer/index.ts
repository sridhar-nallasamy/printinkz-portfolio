import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

const footerContents = {
  contactUs: [
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/inkbuz_official/?igsh=d3ptb2NydzA0cDZ4',
      icon: CameraAltRoundedIcon,
      inputType: 'tel',
    },
    {
      title: 'Phone',
      url: 'tel:+919876543210',
      icon: LocalPhoneRoundedIcon,
      inputType: 'url',
    },
    {
      title: 'Email',
      url: 'mailto:support@printinkz.com',
      icon: MailRoundedIcon,
      inputType: 'email',
    },
  ],
};

export { footerContents };
