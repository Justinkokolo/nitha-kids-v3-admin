// Libs
import { h, Fragment } from 'preact';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import { RectShape } from 'react-placeholder/lib/placeholders';


interface IProps {
  ready: boolean,
}

const largeImage = (
  <div style={{
    marginBottom: 24
  }}>
    <RectShape color='#F2F2F2' style={{width: 404, height: 404}}/>
  </div>
);

const smallImage = (
  <div style={{
    marginBottom: 12
  }}>
    <RectShape color='#F2F2F2' style={{width: 80, height: 80}}/>
  </div>
);

const LargeImagePlaceholder = ({ ready }: IProps) => {
  return (
    <Fragment>
      <ReactPlaceholder customPlaceholder={largeImage} ready={ready} showLoadingAnimation>
      </ReactPlaceholder>
    </Fragment>
  );
};


const SmallImagePlaceholder = ({ ready }: IProps) => {
  return (
    <Fragment>
      <ReactPlaceholder customPlaceholder={smallImage} ready={ready} showLoadingAnimation>
      </ReactPlaceholder>
    </Fragment>
  );
};

export { LargeImagePlaceholder, SmallImagePlaceholder };
