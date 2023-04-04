// Libs
import { h } from 'preact';
import { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

// Utils
import { useAppSelector } from "../../../shared/redux/hooks";
import { refactorList } from "../../../shared/helpers/utils";
// import { FontSize, FontWeight } from '../../constants/fonts';
// import { Spacing } from '../../constants/spacing';

// Components
import Options from "../Options";
import { InnerWrapper, Wrapper, OverlayWrapper, LeftWrapper } from './Menu.styles';
import { Container } from '../../../styles/common.styles';

interface IProps {
  show: boolean;
  onClose: () => void;
}

const Menu = ({ show = false, onClose }: IProps) => {
  const [categoriesList, setCategoriesList] = useState<
    { value: number; text: string }[]
  >([]);
  const { resources } = useAppSelector((state) => state.resource);

  useEffect(() => {
    if (resources.status === "success") {
      const { data } = resources;
      // @ts-ignore
      const { categories } = data;

      setCategoriesList(refactorList(categories));
    }
  }, [resources.status]);


  return (
    <Wrapper>
      <InnerWrapper show={show}>
        <OutsideClickHandler onOutsideClick={onClose}>
          <LeftWrapper show={show}>
            <OverlayWrapper>
              <Container>
                <Options title="CATEGORY" list={categoriesList} ready={resources.status === 'success'} large />
              </Container>
            </OverlayWrapper> 
          </LeftWrapper>
        </OutsideClickHandler>
        
      </InnerWrapper>
    </Wrapper>
  );
};

export default Menu;
