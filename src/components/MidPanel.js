import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../styles/MidPanel.scss';
import NextLineButton from './NextLineButton';
import Param from './parameters';

function MidPanel() {
  const { algorithm } = useContext(GlobalContext);
  return (
    <div className="midPanelContainer">
      <div className="midPanelHeader">
        <div className="algorithmTitle">{algorithm.name}</div>
        <button type="button" className="quizButton">Quiz</button>
      </div>
      <div className="midPanelBody">
        {/* Animation Goes here */}
      </div>
      <div className="midPanelFooter">
        <div className="controlPanel">
          <NextLineButton />
        </div>
        <div className="parameterPanel">
          <Param.BSTParam />
        </div>
      </div>
    </div>
  );
}

export default MidPanel;
