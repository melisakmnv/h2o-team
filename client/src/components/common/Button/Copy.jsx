import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import './Button.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { buttonMessage, hoverMessage } from '../../../utils';
import Checked from '../../../assets/lotties/checked.json';
import Error from '../../../assets/lotties/error.json';
import { HoverMessage } from '../Hover/Hover';

export const Copy = ({ onCopy, isCopied, verifyInputErrors, formErrors, language }) => {
  const defaultButtonContent = buttonMessage.COPY.LANGUAGE[language.index].MESSAGE;

  const [buttonContent, setButtonContent] = useState(defaultButtonContent);
  const [displayChecked, setDisplayChecked] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

useEffect(() => {
  setButtonContent(buttonMessage.COPY.LANGUAGE[language.index].MESSAGE);
}, [language])

  const checkedAnimation = () => {
    return <Lottie animationData={Checked} style={checkedStyle} loop={false} width={'10px'} />;
  };

  const errorAnimation = () => {
    return <Lottie animationData={Error} style={errorStyle} loop={false} width={'10px'} />;
  };

  useEffect(() => {
    if (displayChecked) {
      setButtonContent(checkedAnimation());
      setTimeout(() => {
        setButtonContent(defaultButtonContent);
        setDisplayChecked(false);
      }, 3000);
    } else if (displayError) {
      setButtonContent(errorAnimation());
      setTimeout(() => {
        setButtonContent(defaultButtonContent);
        setDisplayError(false);
      }, 3000);
    }
  }, [displayChecked, displayError]);

  useEffect(() => {
    if (hasClicked) {
      if (Object.keys(formErrors).length === 0) {
        onCopy();
        setDisplayChecked(true);
      } else {
        setDisplayError(true);
      }
    }
  }, [formErrors, hasClicked]);

  const handleClick = (e) => {
    setHasClicked(true);
    verifyInputErrors(e);
  };

  return (
    <Tippy theme="light"
    content={
      <HoverMessage>
        {hoverMessage.copyMessage.LANGUAGE[language.index].MESSAGE}
      </HoverMessage>
    }>
      <button
        id="copy-button"
        data-clipboard-target="#sigA"
        className="copy-btn"
        role="button"
        onClick={handleClick}
      >
        {buttonContent}
      </button>
    </Tippy>
  );
};

const checkedStyle = {
  position: 'absolute',
  height: 50,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const errorStyle = {
  position: 'absolute',
  height: 40,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};
