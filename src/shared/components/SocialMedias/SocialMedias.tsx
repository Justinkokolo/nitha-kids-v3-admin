// Libs
import { h } from 'preact';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

// Utils
import { Color } from '../../constants/colors';
import { Type } from '../../constants/size';

// Components
import { Wrapper, IconWrapper } from './SocialMedias.styles';

interface IProps {
  type?: Type
}

const SocialMedias = ({ type = Type.Medium }: IProps) => {
  const iconSize = type === Type.Small ? 12 : 16;
  return (
    <Wrapper>
      <IconWrapper backgroundColor={Color.facebook} size={type}>
        <FaFacebookF
          size={iconSize}
          color={Color.white}
        />
      </IconWrapper>
      <IconWrapper backgroundColor={Color.twitter} size={type}>
        <FaTwitter
          size={iconSize}
          color={Color.white}
        />
      </IconWrapper>
      <IconWrapper backgroundColor={Color.instagram} size={type}>
        <FaInstagram
          size={iconSize}
          color={Color.white}
        />
      </IconWrapper>
      <IconWrapper backgroundColor={Color.whatsapp} size={type}>
        <FaWhatsapp
          size={iconSize}
          color={Color.white}
        />
      </IconWrapper>
    </Wrapper>
  );
};

export default SocialMedias;
