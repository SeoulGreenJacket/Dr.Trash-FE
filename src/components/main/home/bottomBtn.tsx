import React from 'react';
import {
  BackBtn,
  BackBtnTxt,
  Btn,
  BtnWrapper,
} from '../../../styles/main/home/bottomBtn';

const BottomBtn = ({phase}: {phase: 'before' | 'inProgress' | 'done'}) => {
  return (
    <BtnWrapper phase={phase}>
      {phase === 'before' ? (
        <>
          <Btn />
          <Btn />
        </>
      ) : (
        <BackBtn>
          <BackBtnTxt>
            {phase === 'inProgress' ? '끝내기' : '홈으로'}
          </BackBtnTxt>
        </BackBtn>
      )}
    </BtnWrapper>
  );
};
export default BottomBtn;
