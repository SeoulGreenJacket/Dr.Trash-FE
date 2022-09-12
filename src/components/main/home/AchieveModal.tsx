import React from 'react';
import {Modal} from 'react-native';

const AchieveModal = ({
  achieved,
  setAchieved,
}: {
  achieved: boolean;
  setAchieved: (arg: boolean) => void;
}) => {
  const checkAchieved = () => {
    setAchieved(false);
  };
  return <Modal animated={true} animationType="fade" visible={achieved} />;
};

export default AchieveModal;
