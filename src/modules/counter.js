import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의. '모듈 이름 / 액션 이름'
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

// 리듀서 함수
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

// export : 여러개 내보낼 수 있음, export default : 단 한개만 내보냄
export default counter;
