// Libs
import { h } from 'preact';
import { useState, useEffect } from 'react';

// Utils
import { Color } from '../../constants/colors';
import { FontSize } from '../../constants/fonts';
import { Type } from '../../constants/alert';
import { Spacing } from '../../constants/spacing';

// Components
import { X, CheckSquare, XOctagon } from 'react-feather';
import { IconWrapper, InnerWrapper, SecondInnerWrapper, TypeWrapper, Wrapper } from './Alert.styles';
import Typography from '../Typography';
import Space from '../Space';

interface IProps {
  text: string;
  show?: boolean;
  type?: Type
};

const iconSize = 16;
const Alert = ({
  text,
  show = false,
  type,
} : IProps) => {
  
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(show);
  }, [show]);

  return (
    <Wrapper show={showAlert}>
      <InnerWrapper>
        <SecondInnerWrapper>
          <TypeWrapper>
            {type === Type.Error ?
              <XOctagon size={iconSize} color={Color.red} />
              : <CheckSquare size={iconSize} color={Color.darkGreen} />
            }
          </TypeWrapper>
          <Typography
            text={type === Type.Error ? 'ERROR' : 'SUCCESS'}
            size={FontSize.XXSmall}
            color={Color.darkGray}
          />
        </SecondInnerWrapper>
        <IconWrapper onClick={() => setShowAlert(false)}>
          <X size={iconSize} color={Color.default}/>
        </IconWrapper>
      </InnerWrapper>
      <Space size={Spacing.Medium} />
      <Typography
        text={text}
        size={FontSize.Small}
        color={Color.default}
      />
    </Wrapper>
  );
};

export default Alert;
