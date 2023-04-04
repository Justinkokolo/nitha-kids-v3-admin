// Libs
import { h } from 'preact';

// Utils
import { Color } from '../../constants/colors';

// Components
import { Wrapper } from './Announces.styles';
import AnnounceCard from '../AnnounceCard';
import { Container } from '../../../styles/common.styles';
import { CreditCard, Truck, CheckSquare } from 'react-feather';

const iconSize = 38;
const iconColor = Color.green;
const Announces = () => {
  return (
    <Container>
      <Wrapper>
        <AnnounceCard 
          title="Secure and reliable"
          icon={<CreditCard size={iconSize} color={iconColor} />}
          description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used"
        />
        <AnnounceCard 
          title="Great quality"
          icon={<CheckSquare size={iconSize} color={iconColor} />}
          description="Lorem ipsum is a placeholder text commonly used"
        />
        <AnnounceCard 
          title="Delivery"
          icon={<Truck size={iconSize} color={iconColor} />}
          description="In publishing and graphic design, Lorem"
        />
      </Wrapper>
    </Container>
  );
};

export default Announces;