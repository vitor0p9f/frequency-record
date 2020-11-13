import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { defaultLoadingAnimationOptions } from '../../config/animationConfig';
import Styles from './styles.module.css';

const LoadingAnimation: React.FC = () => {
  const [animation_state] = useState({
    isStopped: false, isPaused: false
  });
  
  return (
    <div className={Styles.container}>
      <Lottie options={defaultLoadingAnimationOptions}
        height= {400}
        width= {400}
        isStopped={animation_state.isStopped}
        isPaused={animation_state.isPaused}
        isClickToPauseDisabled={true}
      />
      <div className={Styles.info}>
        <h4>Created by</h4>
        <a target="_blank" rel="noopener noreferrer" href="https://lottiefiles.com/zeffchris" >Jeffrey Christopher</a>
      </div>
    </div>
  );
}

export default LoadingAnimation;