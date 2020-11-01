import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../styles/ProgressBar.scss';

function ProgressBar({ current, max }) {
  const node = {
    rectPrimary: document.querySelector('.mux-lpi-rect--primary'),
    buffer: document.querySelector('.mux-lpi-buffer'),
  };

  function setTransform(ref, value) {
    if (ref !== null) {
      const { style } = ref;
      style.transform = value;
      style.WebkitTransform = value;
      style.MozTransform = value;
      style.OTransform = value;
      style.MSTransform = value;
    }
  }

  function isInputValid(first, second) {
    if (first >= 0 && second >= 0) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    function setProgress(ref, val) {
      setTransform(ref, `scaleX(${val})`);
    }

    function setBuffer(ref, val) {
      setTransform(ref, `scaleX(${val})`);
    }

    setProgress(node.rectPrimary, parseFloat(current / max, 10));
    setBuffer(node.buffer, 1);
  }, [node, current, max]);

  return (
    <div role="progressbar" className="mux-lpi">
      <div className="progressLable">
        <div className="innerText">
          {
            isInputValid(current, max)
              ? `${current}/${max}`
              : 'Not Loaded'
          }
        </div>
      </div>
      <div className="mux-lpi-buffer" />
      <div className="mux-lpi-rect mux-lpi-rect--primary" style={{ transform: 'scaleX(0)' }}>
        <span className="mux-lpi-rect-inner" style={{ transform: 'scaleX(1)' }} />
      </div>
    </div>
  );
}

export default ProgressBar;
ProgressBar.propTypes = {
  current: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
