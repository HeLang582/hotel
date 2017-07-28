/* eslint-disable linebreak-style */
import hotel from '../assets/hotel.gif';
import room from '../assets/room.gif';
import food from '../assets/food.gif';
import health from '../assets/health.gif';
import TV from '../assets/TV.png';
import Hotel from '../assets/hotel.png';
import Circum from '../assets/circum.png';
import TVIcon from '../assets/tv.svg';
import HotelIcon from '../assets/hotel.svg'
import CircumIcon from '../assets/circum.svg'

export default {

  namespace: 'menu',

  state: {
    Langluage: 'chinese',
    welcomeContent: {
      hotelTitle_ZH: '恒大酒店',
      hotelTitle_EN: 'Hengda Hotel',
      welcome_ZH: '欢迎入住',
      welcome_EN: 'Welcome !',
      roomNumber_ZH: '房间号：',
      roomNumber_EN: 'Room No.',
      welcomeSlogan_ZH: '尊敬的客人',
      welcomeSlogan_EN: 'Distinguished guest',
      roomNumber: 111,
    },
    currentIndex: 0,
    homeMenuIndex: 0,
    menuList: [
      {
        img: hotel,
        name_ZH: '酒店',
        name_EN: 'Hotel',
        abstract_ZH: '我是酒店简介，御景世界会所，嘉华KTV包房配备顶级音响；' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '节目精彩纷呈，丰富时尚，美轮美奂。',
        abstract_EN: 'the royal view world club, the jihua KTV house equipped with the top stereo;' +
        'the royal view world club, the jihua KTV house equipped with the top stereo;',
      },
      {
        img: room,
        name_ZH: '客房',
        name_EN: 'Guest-room',
        abstract_ZH: '我是客房简介，娱乐中心引进了顶级的电影城，儿童欢乐中心，御景世界会所，嘉华KTV包房配备顶级音响；' +
        '专业模特表演队伍，' +
        '节目精彩纷呈，丰富时尚，美轮美奂。',
        abstract_EN: 'the royal view world club, the jihua KTV house equipped with the top stereo;',
      },
      {
        img: food,
        name_ZH: '饮食中心',
        name_EN: 'Diet center',
        abstract_ZH: '我是饮食中心简介，娱乐中心引进了顶级的电影城，儿童欢乐中心，御景世界会所，嘉华KTV包房配备顶级音响；' +
        '动感演艺大厅内先进镭射灯光。我是饮食中心简介，娱乐中心引进了顶级的电影城，儿童欢乐中心，御景世界会所，嘉华KTV包' +
        '房配备顶级音响；动感演艺大厅内先进镭射灯光。房配备顶级音响；动感演艺大厅内先进镭射灯光。房配备顶级音响；动感演艺大厅' +
        '内先进镭射灯光。房配备顶级音响；动感演艺大厅内先进镭射灯光。房配备顶级音响；动感演艺大厅内先进镭射灯光。房配备顶级音响；' +
        '动感演艺大厅内先进镭射灯光。',
        abstract_EN: 'the royal view world club, the jihua KTV house equipped with the top stereo;' +
        'the royal view world club, the jihua KTV house equipped with the top stereo;' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        'The program is wonderful, rich in fashion and beautiful.',
      },
      {
        img: health,
        name_ZH: '健康中心',
        name_EN: 'SPA',
        abstract_ZH: '我是娱乐中心简介，娱乐中心引进了顶级的电影城，儿童欢乐中心，御景世界会所，嘉华KTV包房配备顶级音响；' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '节目精彩纷呈，丰富时尚，美轮美奂。测试测试测试',
        abstract_EN: 'the royal view world club, the jihua KTV house equipped with the top stereo;' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        'The program is wonderful, rich in fashion and beautiful.',
      },
      {
        img: hotel,
        name_ZH: '酒店酒店酒店酒店',
        name_EN: 'Hotel',
        abstract_ZH: '我是酒店简介，娱乐中心引进了顶级的电影城，儿童欢乐中心，御景世界会所，嘉华KTV包房配备顶级音响；' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '节目精彩纷呈，丰富时尚，美轮美奂。',
        abstract_EN: 'the royal view world club, the jihua KTV house equipped with the top stereo;' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        ' gather excellent singer and professional model performance team,' +
        'The program is wonderful, rich in fashion and beautiful.',
      },
      {
        img: room,
        name_ZH: '客房',
        name_EN: 'Guest-room',
        abstract_ZH: '我是客房简介，娱乐中心引进了顶级的电影城，儿童欢乐中心，御景世界会所，嘉华KTV包房配备顶级音响；' +
        '动感演艺大厅内先进镭射灯光，大型歌舞及明星汇演，梦幻伸缩舞台，汇聚优秀的歌手艺人、专业模特表演队伍，' +
        '节目精彩纷呈，丰富时尚，美轮美奂。',
        abstract_EN: 'The entertainment center introduces the top film city, the children\'s joy center,' +
        ' the royal view world club, the jihua KTV house equipped with the top stereo;' +
        '"The advanced laser lighting, large dance and star confluence, dream retractable stage,' +
        ' gather excellent singer and professional model performance team,' +
        'The program is wonderful, rich in fashion and beautiful.',
      },
    ],
    homeList: [
      {
        src: Hotel,
        icon: HotelIcon,
        title_ZH: '酒店',
        title_EN: 'Hotel',
      },
      {
        src: TV,
        icon: TVIcon,
        title_ZH: '电视节目',
        title_EN: 'TV',
      },
      {
        src: Circum,
        icon: CircumIcon,
        title_ZH: '周边',
        title_EN: 'Circum',
      },
      {
        src: Hotel,
        icon: HotelIcon,
        title_ZH: '酒店',
        title_EN: 'Hotel',
      },
      {
        src: TV,
        icon: TVIcon,
        title_ZH: '电视节目',
        title_EN: 'TV',
      },
      {
        src: Circum,
        icon: CircumIcon,
        title_ZH: '周边',
        title_EN: 'Circum',
      },
    ],
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    changeLanguage(state, { payload: { language } }) {
      return { ...state, Langluage: language };
    },
    changeCurrentIndex(state, { payload: { index } }) {
      return { ...state, currentIndex: index };
    },
    changeHomeMenuIndex(state, { payload: { index } }) {
      return { ...state, homeMenuIndex: index };
    },
  },

};
