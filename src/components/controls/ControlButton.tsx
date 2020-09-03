import React from 'react'
import { Button } from '@material-ui/core'

interface Props {
  text: string;
  colour?: 'primary' | 'secondary';
}

const ControlButton: React.FC<Props> = ({ text, colour }) => {
  return (
    <Button variant="contained" color={colour}>
      {text}
    </Button>
  )
}

export default ControlButton
