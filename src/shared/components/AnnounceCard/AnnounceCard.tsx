// Libs
import { h } from 'preact';
import React from 'react';

// Utils
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';
import { Spacing } from '../../constants/spacing';

// Components
import { Wrapper, DescriptionWrapper } from './AnnounceCard.styles';
import Typography from '../Typography';
import Space from '../Space/Space';

interface IProps {
  title: string,
  icon: React.ReactNode,
  description: string,
}

const AnnounceCard = ({ title, icon, description }: IProps) => {
  return (
    <Wrapper>
      {icon}
      <Space size={Spacing.Large} />
      <Typography
        text={title}
        size={FontSize.Large}
        weight={FontWeight.Bold}
        color={Color.darkBlue}
      />
      <Space size={Spacing.Small} />
      <DescriptionWrapper>
        <Typography
          text={description}
          size={FontSize.Medium}
          weight={FontWeight.Regular}
          centered
          opacity={0.8}
        />
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default AnnounceCard;
