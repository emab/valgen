import React from 'react';
import model from '../../img/model.png';
import redCircle from '../../img/circle-red.svg';
import circle from '../../img/circle.svg';
import './Preview.css';
import { connect } from 'react-redux';
import { State } from '../../types/State';
import { Value } from '../../types/Value';
import PreviewTable from './Table';
import { Values } from '../../types/Values';

interface Props {
  personalValues: Value[];
  currentValues: Value[];
  idealValues: Value[];
}

const ADD_CIRCLE = (limiting: boolean | undefined, key: string) =>
  limiting ? <img key={key} src={redCircle} /> : <img key={key} src={circle} />;

const Preview: React.FC<Props> = ({
  personalValues,
  currentValues,
  idealValues,
}) => {
  const outputCircles = (values: Value[]) => (level: number) => {
    let circles: JSX.Element[] = [];
    values
      .filter((val) => val.level === level)
      .forEach((val) => {
        circles.push(ADD_CIRCLE(val.limiting, val.name));
      });
    return circles;
  };
  const outputPersonalValues = outputCircles(personalValues);
  const outputCurrentValues = outputCircles(currentValues);
  const outputIdealValues = outputCircles(idealValues);

  return (
    <div id="modelOutput" className="flex flex-row justify-center">
      <div className="model-container">
        <h1 className="text-center">Personal Values</h1>
        <img src={model} className="model-image" />
        <div className="values-grid">
          <div>{outputPersonalValues(7)}</div>
          <div>{outputPersonalValues(6)}</div>
          <div>{outputPersonalValues(5)}</div>
          <div>{outputPersonalValues(4)}</div>
          <div>{outputPersonalValues(3)}</div>
          <div>{outputPersonalValues(2)}</div>
          <div>{outputPersonalValues(1)}</div>
        </div>
        <PreviewTable displayValue={Values.PERSONAL} />
      </div>
      <div className="model-container">
        <img src={model} className="model-image" />
        <h1 className="text-center">Current Organisational Values</h1>

        <div className="values-grid">
          <div>{outputCurrentValues(7)}</div>
          <div>{outputCurrentValues(6)}</div>
          <div>{outputCurrentValues(5)}</div>
          <div>{outputCurrentValues(4)}</div>
          <div>{outputCurrentValues(3)}</div>
          <div>{outputCurrentValues(2)}</div>
          <div>{outputCurrentValues(1)}</div>
        </div>
        <PreviewTable displayValue={Values.CURRENT} />
      </div>
      <div className="model-container">
        <img src={model} className="model-image" />
        <h1 className="text-center">Desired Organisational Values</h1>
        <div className="values-grid">
          <div>{outputIdealValues(7)}</div>
          <div>{outputIdealValues(6)}</div>
          <div>{outputIdealValues(5)}</div>
          <div>{outputIdealValues(4)}</div>
          <div>{outputIdealValues(3)}</div>
          <div>{outputIdealValues(2)}</div>
          <div>{outputIdealValues(1)}</div>
        </div>
        <PreviewTable displayValue={Values.IDEAL} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  personalValues: state.personal.values,
  currentValues: state.current.values,
  idealValues: state.ideal.values,
});

export default connect(mapStateToProps)(Preview);
