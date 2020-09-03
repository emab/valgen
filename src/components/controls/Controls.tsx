import React from 'react'
import ControlButton from './ControlButton'

const Controls = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <ControlButton text="Save Diagram" colour="primary" />
          <ControlButton text="Reset" colour="secondary" />
        </div>
        <div>
          <ControlButton text="Tab 1" />
          <ControlButton text="Tab 2" />
          <ControlButton text="Tab 3" />
        </div>
      </div>
    </>
  )
}

export default Controls
