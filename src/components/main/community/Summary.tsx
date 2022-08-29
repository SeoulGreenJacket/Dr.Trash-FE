import React, {useState} from 'react';
import {
  Category,
  CategoryText,
  Section1,
  Section2,
} from '../../../styles/main/community';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SummaryList from './SummaryList';
import NewPage from './NewPage';

export interface ICommunityProps {
  title: string;
  nickname: string;
  views: number;
  date: Date;
  content: string;
  comments: {
    content: string;
    nickname: string;
    date: Date;
  }[];
}

const dummyTitleList = [
  '쓰레기 어떻게 버리나요',
  '쓰레기 운동 참여할 사람?',
  '쓰레기 운동 참여 안할 사람?',
  '쓰레기 운동 참여 할지 말지 모르는 사람?',
  '쓰레기 운동 참여 안할 사람이 아닌 사람?',
  '쓰레기 운동 참여 할 사람이 아닌 사람?',
];
const dummyContent = [
  '오늘 날씨가 좋네요',
  '오늘 날씨가 좋지 않네요',
  '오늘 날씨가 좋지 않아요',
  '오늘 날씨가 좋지 않아요',
  '오늘 쓰레기를 버렸어요',
  '오늘 쓰레기를 버렸지 않았어요',
];
const dummyNickname = [
  '김철수',
  '이영희',
  '박철수',
  '김영희',
  '이철수',
  '박영희',
  '쓰레기',
];
const dummyNewDate = +new Date();

const communotyDataProducer = () => {
  const dummyData = [];
  for (let i = 0; i < 40; i++) {
    const data = {
      title: dummyTitleList[Math.floor(Math.random() * 6)],
      nickname: dummyNickname[Math.floor(Math.random() * 7)],
      views: Math.floor(Math.random() * 100),
      date: new Date(dummyNewDate),
      content: dummyContent[Math.floor(Math.random() * 6)],
      comments: [
        {
          content: dummyContent[Math.floor(Math.random() * 6)],
          nickname: dummyNickname[Math.floor(Math.random() * 7)],
          date: new Date(dummyNewDate),
        },
        {
          content: dummyContent[Math.floor(Math.random() * 6)],
          nickname: dummyNickname[Math.floor(Math.random() * 7)],
          date: new Date(dummyNewDate),
        },
      ],
    };
    dummyData.push(data);
  }
  return dummyData;
};
const SummaryBox = ({name}: {name: string}) => {
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState<'인기 글' | '전체 글'>('인기 글');
  const [modalData, setModalData] = useState<ICommunityProps[]>();
  const dummyData = communotyDataProducer();
  const popular = dummyData.sort((a, b) => b.views - a.views);
  const time = dummyData.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  });

  return (
    <>
      {name === '인기 글' ? (
        <Section1>
          <Category
            onPress={() => {
              setModal(true);
              setModalData(popular);
              setCategory('인기 글');
            }}>
            <CategoryText>인기 글</CategoryText>
            <Icon name="arrow-forward-ios" size={17} />
          </Category>
          <SummaryList popular={popular} time={null} />
        </Section1>
      ) : (
        <Section2>
          <Category
            onPress={() => {
              setModal(true);
              setModalData(time);
              setCategory('전체 글');
            }}>
            <CategoryText>전체 글</CategoryText>
            <Icon name="arrow-forward-ios" size={17} />
          </Category>
          <SummaryList time={time} popular={null} />
        </Section2>
      )}
      <NewPage
        modal={modal}
        setModal={setModal}
        modalData={modalData}
        category={category}
      />
    </>
  );
};

export default SummaryBox;
