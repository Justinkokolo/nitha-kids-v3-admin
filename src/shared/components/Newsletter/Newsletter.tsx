// Libs
import { h } from 'preact';

// Utils
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';
import { Spacing } from '../../constants/spacing';

// Components
import { InnerWrapper, Wrapper, TextWrapper, TextFieldWrapper, FormWrapper } from './Newsletter.styles';
import Typography from '../Typography';
import Space from '../Space';
import TextField from '../TextField';
import Button from '../Button';
import { Container } from '../../../styles/common.styles';

const Newsletter = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Container>
          <Typography
            text="Souscrire à la Newsletter"
            size={FontSize.MXLarge}
            weight={FontWeight.Bold}
            color={Color.darkBlue}
          />
          <Space size={Spacing.Medium} />
          <TextWrapper>
            <Typography
              text="Etre notifiés sur les nouveaux articles et sur des différentes offres et promotions"
              size={FontSize.ExtraMedium}
              weight={FontWeight.Regular}
            />
          </TextWrapper>
          <Space size={Spacing.XLarge} />
          <FormWrapper>
            <TextFieldWrapper>
              <TextField
                id="newsletter"
                placeholder="Votre addresse email"
                onChange={text => console.log(text)}
                newsletter
              />
            </TextFieldWrapper>
            <Button
              text="Souscrire"
              color={Color.white}
              backgroundColor={Color.darkBlue}
              onClick={() => {}}
              newsletter
            />
          </FormWrapper>
          <Space size={Spacing.Medium} />
          <Typography
            text="En soumettant vous donnez, vous avez accepté "
            suffix="Notre politique de confidentialé"
            suffixColor={Color.green}
            suffixClickable
            size={FontSize.Medium}
            weight={FontWeight.Regular}
          />
        </Container>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Newsletter;