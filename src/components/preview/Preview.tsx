import React from 'react';
import model from '../../img/model.png';
import redCircle from '../../img/circle-red.svg';
import circle from '../../img/circle.svg';
import './Preview.css';
import { connect } from 'react-redux';
import { State } from '../../types/State';
import { Value } from '../../types/Value';

interface Props {
  personalValues?: Value[];
  currentValues?: Value[];
  idealValues?: Value[];
}

const BLUE_CIRCLE = (key: string) => <img key={key} src={circle} />;

const Preview: React.FC<Props> = ({
  personalValues,
  currentValues,
  idealValues,
}) => {
  const numPersonalValues = (level: number) => {
    let circles: JSX.Element[] = [];
    personalValues
      ?.filter((val) => val.level === level)
      .forEach((val) => circles.push(BLUE_CIRCLE(val.name)));
    return circles;
  };
  return (
    <div className="flex flex-row justify-center">
      <div className="model-container">
        <img src={model} className="model-image" />
        <div className="values-grid">
          <div id="p7">{numPersonalValues(7)}</div>
          <div id="p6">{numPersonalValues(6)}</div>
          <div id="p5">{numPersonalValues(5)}</div>
          <div id="p4">{numPersonalValues(4)}</div>
          <div id="p3">{numPersonalValues(3)}</div>
          <div id="p2">{numPersonalValues(2)}</div>
          <div id="p1">{numPersonalValues(1)}</div>
        </div>
        <div className="table-container">
          <table className="preview-table">
            <thead>
              <tr>
                <th>Value</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
      <div className="model-container">
        <img src={model} className="model-image" />
        <div className="values-grid">
          <div id="c7"></div>
          <div id="c6"></div>
          <div id="c5"></div>
          <div id="c4"></div>
          <div id="c3"></div>
          <div id="c2"></div>
          <div id="c1"></div>
        </div>
        <div className="table-container">
          <table className="preview-table">
            <thead>
              <tr>
                <th>Value</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
      <div className="model-container">
        <img src={model} className="model-image" />
        <div className="values-grid">
          <div id="i7"></div>
          <div id="i6"></div>
          <div id="i5"></div>
          <div id="i4"></div>
          <div id="i3"></div>
          <div id="i2"></div>
          <div id="i1"></div>
        </div>
        <div className="table-container">
          <table className="preview-table">
            <thead>
              <tr>
                <th>Value</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
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
