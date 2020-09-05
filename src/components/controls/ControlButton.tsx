import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  id?: string;
  text: string;
  colour?: 'primary' | 'secondary';
  onClick?: Function;
  highlight?: boolean;
}

const ControlButton: React.FC<Props> = ({
  id,
  text,
  colour,
  onClick,
  highlight,
}) => {
  const handleOnClick = (evt: React.MouseEvent) => {
    if (id) {
      onClick && onClick(id);
    } else {
      onClick && onClick();
    }
  };

  return (
    <Button
      id={id}
      variant="outlined"
      color={highlight ? 'primary' : 'default'}
      className="tab-button"
      onClick={handleOnClick}
    >
      {text}
    </Button>
  );
};

export default ControlButton;
