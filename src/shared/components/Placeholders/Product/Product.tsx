// Libs
import { h, Fragment } from 'preact';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import { RectShape, RoundShape } from 'react-placeholder/lib/placeholders';


interface IProps {
  ready: boolean,
  showTwoPerRow?: boolean;
  menuProduct?: boolean;
  isMobile?: boolean;
}

const productItem = (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 24,
    width: 246
  }}>
    <RectShape color='#F2F2F2' style={{width: 246, height: 246}}/>
    <br />
    <RoundShape color='#F4F4F4' style={{width: 178, height: 12, marginBottom: 0}}/>
    <RoundShape color='#F4F4F4' style={{width: 78, height: 16, marginTop: 8}}/>
  </div>
);

const productItemLarge = (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 24,
    width: 376
  }}>
    <RectShape color='#F2F2F2' style={{width: 376, height: 376}}/>
    <br />
    <RoundShape color='#F4F4F4' style={{width: 178, height: 12, marginBottom: 0}}/>
    <RoundShape color='#F4F4F4' style={{width: 78, height: 16, marginTop: 8}}/>
  </div>
);

const menuProductItem = (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 24,
    width: 296
  }}>
    <RectShape color='#F2F2F2' style={{width: 296, height: 296}}/>
    <br />
    <RoundShape color='#F4F4F4' style={{width: 170, height: 12, marginBottom: 0}}/>
    <RoundShape color='#F4F4F4' style={{width: 78, height: 16, marginTop: 8}}/>
  </div>
);

const mobileProductItem = (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
    width: 'calc(50vw - 24px)'
  }}>
    <RectShape color='#F2F2F2' style={{width: 'calc(50vw - 24px)', height: 'calc(50vw - 24px)'}}/>
    <br />
    <RoundShape color='#F4F4F4' style={{width: 140, height: 11, marginBottom: 0}}/>
    <RoundShape color='#F4F4F4' style={{width: 50, height: 13, marginTop: 8}}/>
  </div>
);

const Product = ({ ready, showTwoPerRow, menuProduct = false, isMobile }: IProps) => {
  const typeCheck = showTwoPerRow ? productItemLarge : productItem;
  const check = menuProduct ? menuProductItem : typeCheck;
  const secondCheck = isMobile ? mobileProductItem : check;
  return (
    <Fragment>
      <ReactPlaceholder customPlaceholder={secondCheck} ready={ready} showLoadingAnimation>
      </ReactPlaceholder>
    </Fragment>
  );
};

export default Product;
