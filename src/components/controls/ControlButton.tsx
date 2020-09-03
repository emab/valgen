import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  id?: string;
  text: string;
  colour?: 'primary' | 'secondary';
  onClick?: Function;
}

const ControlButton: React.FC<Props> = ({ id, text, colour, onClick }) => {
  const handleOnClick = (evt: React.MouseEvent) => {
    onClick && onClick(id);
  };
  return (
    <Button id={id} variant="contained" color={colour} onClick={handleOnClick}>
      {text}
    </Button>
  );
};

export default ControlButton;
