// Libs
import { h, Fragment } from 'preact';

// Components
import ListItem from "./../ListItem";

interface IProps {
  data?: {
    name: string;
    symbol: string;
    id: number;
  }[];
}

const List = ({ data = [] }: IProps) => {
  return (
    <Fragment>
      {data.map((item) => {
        return (
          <ListItem
            id={item.id}
            symbol={item.symbol}
            name={item.name}
            key={data.indexOf(item)}
          />
        );
      })}
    </Fragment>
  );
};

export default List;
