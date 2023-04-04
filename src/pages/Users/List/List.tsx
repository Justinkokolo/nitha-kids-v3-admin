// Libs
import { h, Fragment } from 'preact';

// Components
import ListItem from "./../ListItem";

interface IProps {
  data?: any
}

const List = ({ data = [] }: IProps) => {
  return (
    <Fragment>
      {data.map((item: any) => {
        return (
          <ListItem
            id={item.id}
            firstname={item.detail.firstname}
            lastname={item.detail.lastname}
            role={item.role.name}
            telephone ={item.telephone}
            key={data.indexOf(item)}
          />
        );
      })}
    </Fragment>
  );
};

export default List;
