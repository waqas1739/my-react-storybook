import React, { Component } from 'react';
import'./signalData.css';

interface SignalsProps {
  activeSignals: number[];
  onsignalChange: (kpiId: number) => void;
}

interface SignalsState {
  value: boolean;
}

const Signals = [
  {
    id: 0,
    name: 'Chart 1',
  },
  {
    id: 1,
    name: 'Chart 2',
  },
];

export default class SignalsData extends Component<SignalsProps, SignalsState> {
  constructor(props: SignalsProps) {
    super(props);

    this.state = {
      value : true,
    };
  }

  handleDisruptionChange = () => {
    this.setState((prevState) => ({
      value: !prevState.value,
    }));
  };

  render() {
    const { activeSignals, onsignalChange } = this.props;

    return (
      <div className="signals-container">
        {Signals.map((signal) => {
          const isActive = activeSignals.includes(signal.id);
          return (
            <div
              key={signal.id}
              className={`signals-button ${isActive ? 'active' : ''}`}
              onClick={() => onsignalChange(signal.id)}
            >
              <div>{signal.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
