import React, { useMemo } from 'react';
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
    onClick && onClick(id);
  };
  const buttonColour = colour ? colour : highlight ? 'primary' : undefined;

  return (
    <Button
      id={id}
      variant="contained"
      color={buttonColour}
      onClick={handleOnClick}
    >
      {text}
    </Button>
  );
};

export default ControlButton;
