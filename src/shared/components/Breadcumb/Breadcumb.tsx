// Libs
import { h, Fragment } from 'preact';
import { useState, useEffect } from 'react';
import { route } from 'preact-router';

// Utils
import { Color } from '../../constants/colors';
import { FontSize, FontWeight } from '../../constants/fonts';

// Components
import {
  Wrapper,
  Divider
} from './Breadcumb.styles';
import Typography from '../Typography';
import { Container, Row } from '../../../styles/common.styles';

interface IProps {
  list: {
    text: string,
    link: string
  }[],
  activeText: string
}

const Breadcumb = ({ list, activeText }: IProps) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <Wrapper scrollTop={scrollTop}>
      <Container>
        <Row>
          {list.map((item, index) => {
            const { text, link } = item;
            return (
              <Fragment key={index}>
                <Typography
                  text={text}
                  weight={FontWeight.SemiBold}
                  size={FontSize.Small}
                  clickable
                  onClick={() => {
                    route(link);
                  }}
                />
                <Divider>/</Divider>
              </Fragment>
            );
          })}
          <Typography
            text={activeText}
            weight={FontWeight.Regular}
            size={FontSize.Small}
            color={Color.textLight}
          />
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Breadcumb;
