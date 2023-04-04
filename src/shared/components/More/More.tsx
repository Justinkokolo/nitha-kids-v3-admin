// Libs
import { h } from 'preact';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

// Components
import { MoreHorizontal } from 'react-feather';
import { IconWrapper, List, ListItem, Wrapper } from './More.styles';

interface IProps {
  list: string[];
  onSelect: (text: string) => void;
}

const iconSize = 16;
const More = ({ list, onSelect } : IProps) => {
  const [open, setOpen] = useState(false);
  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <Wrapper>
        <IconWrapper onClick={() => setOpen(true)}>
          <MoreHorizontal size={iconSize} />
        </IconWrapper>
        {open && (
          <List>
            {list.map((item, index) => {
              return (
                <ListItem
                  onClick={() => {
                    onSelect(item);
                    setOpen(false);
                  }}
                  key={index}
                  withBorder={index !== list.length - 1}
                >{item}
                </ListItem>
              );
            })}
          </List>
        )}
      </Wrapper>
    </OutsideClickHandler>
  );
};

export default More;
