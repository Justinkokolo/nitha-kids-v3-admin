// Libs
import { h } from 'preact';
import { useState } from 'react';

// Utils
import { Color } from '../../../constants/colors';
import { Spacing } from '../../../constants/spacing';

// Components
import {
  Wrapper, RightWrapper, InnerWrapper
} from './Header.styles';
import { Search } from 'react-feather';
import { FaFilter, FaSlidersH } from "react-icons/fa";
import Modal from '../Modal';
import Tabs from '../Tabs';

const Header = () => {
  const [showModal, setShowModal] = useState(false);  
  return (
    <Wrapper>
      <InnerWrapper>
        <Search size={20} color={Color.darkBlue} />
        <RightWrapper>
          <FaSlidersH
            onClick={() => setShowModal(true)}
            size={18}
            color={Color.darkGray}
          />
          <FaFilter
            onClick={() => setShowModal(true)}
            size={16}
            color={Color.green}
            style={{
              marginLeft: Spacing.Medium
            }}
          />
        </RightWrapper>
      </InnerWrapper>
      <Tabs />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sed commodi, eligendi ex incidunt suscipit dolorum dolorem at veniam fugit quam laboriosam beatae accusantium culpa cum, obcaecati exercitationem eaque sint.  
      </Modal>
    </Wrapper>
  );
};

export default Header;
