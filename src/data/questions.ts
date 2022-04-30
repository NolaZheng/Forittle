import { Question } from '@/types'
import homeBg from '../assets/home-bg.jpeg'
import q1 from '../assets/q1-bg.jpeg'
import q2 from '../assets/q2-bg.jpeg'
import q3 from '../assets/q3-bg.jpeg'
import q4 from '../assets/q4-bg.jpeg'
import q5 from '../assets/q5-bg.jpeg'
import q6 from '../assets/q6-bg.jpeg'

const containerStyle = {
  width: '152px',
  backgroundColor: 'white',
  border: '2px solid #272F3F',
  margin: '10px',
}

const labelStyle = {
  color: '#272F3F',
}

export const Questions: Question[] = [
  {
    description: '',
    background: homeBg,
    options: [
      {
        content: '開始',
        clickAction: 'quizContinue',
      },
    ],
  },
  {
    description: '請告訴我，你現在的身高是多少呢？',
    background: q1,
    options: [
      {
        content: '我是 ??? cm',
        clickAction: 'numberPicker',
        containerStyle: {
          backgroundColor: 'white',
          border: '2px solid #272F3F',
        },
        labelStyle,
      },
    ],
  },
  {
    description: '你平常「上半身」會選擇什麼尺寸呢？',
    background: q2,
    options: [
      {
        content: 'XS號',
        clickAction: 'optionSelect',
        containerStyle,
        labelStyle,
      },
      {
        content: 'S號',
        clickAction: 'optionSelect',
        containerStyle,
        labelStyle,
      },
      {
        content: 'M號',
        clickAction: 'optionSelect',
        containerStyle,
        labelStyle,
      },
      {
        content: 'L號',
        clickAction: 'optionSelect',
        containerStyle,
        labelStyle,
      },
    ],
  },
  {
    description: '你平常「下半身」會選擇什麼尺寸呢？',
    background: q3,
    options: [
      {
        content: 'XS號',
        clickAction: 'optionSelect',
        containerStyle,
        labelStyle,
      },
      {
        content: 'S號',
        clickAction: 'optionSelect',
        containerStyle,
        labelStyle,
      },
      {
        content: 'M號',
        clickAction: 'optionSelect',
        containerStyle,
        labelStyle,
      },
      {
        content: 'L號',
        clickAction: 'optionSelect',
        containerStyle,
        labelStyle,
      },
    ],
  },
  {
    description: '走到鏡子前觀察，覺得自己最胖的是哪個部位呢？',
    background: q4,
    options: [
      {
        content: '上身',
        clickAction: 'optionSelect',
        value: 'C',
        containerStyle,
        labelStyle,
      },
      {
        content: '腰',
        clickAction: 'optionSelect',
        value: 'B',
        containerStyle,
        labelStyle,
      },
      {
        content: '臀',
        clickAction: 'optionSelect',
        value: 'A',
        containerStyle,
        labelStyle,
      },
      {
        content: '腿',
        clickAction: 'optionSelect',
        value: 'A',
        containerStyle,
        labelStyle,
      },
    ],
  },
  {
    description: '現在回想一下，你曾經被稱讚的穿搭，是偏向以上哪一種？',
    background: q5,
    options: [
      {
        content: '左邊',
        clickAction: 'optionSelect',
        containerStyle,
        labelStyle,
      },
      {
        content: '右邊',
        clickAction: 'optionSelect',
        containerStyle,
        labelStyle,
      },
    ],
  },
  {
    description: '但平常的生活中，你更喜歡哪一種穿搭呢？',
    background: q6,
    options: [
      {
        content: '合身款',
        clickAction: 'optionSelect',
        containerStyle,
        labelStyle,
      },
      {
        content: '寬鬆款',
        clickAction: 'optionSelect',
        containerStyle,
        labelStyle,
      },
    ],
  },
]
