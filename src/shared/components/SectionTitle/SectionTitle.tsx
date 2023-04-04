// Libs
import { h } from 'preact';

// Utils
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';

// Components
import {
  Wrapper
} from './SectionTitle.styles';
import Typography from '../Typography';
import { Container } from '../../../styles/common.styles';

interface IProps {
  text: string;
}

const SectionTitle = ({ text }: IProps) => {
  return (
    <Container>
      <Wrapper>
        <Typography
          text={text}
          weight={FontWeight.Bold}
          size={FontSize.XXXLarge}
          color={Color.darkBlue}
          largeBadge={8}
        />
      </Wrapper>
    </Container>
  );
};

export default SectionTitle;
