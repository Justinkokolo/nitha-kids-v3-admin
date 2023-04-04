// Libs
import { h, Fragment } from 'preact';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import { RectShape } from 'react-placeholder/lib/placeholders';


interface IProps {
  ready: boolean,
}

const content = (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingRight: 16
  }}>
    <RectShape color='#F4F4F4' style={{width: 160, height: 20, borderRadius: 8}}/>
    <RectShape color='#F4F4F4' style={{width: 20, height: 20, borderRadius: 4}}/>
  </div>
);

const Filter = ({ ready }: IProps) => {
  return (
    <Fragment>
      <ReactPlaceholder customPlaceholder={content} ready={ready} showLoadingAnimation>
      </ReactPlaceholder>
    </Fragment>
  );
};

export default Filter;
