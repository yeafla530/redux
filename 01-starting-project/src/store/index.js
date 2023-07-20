// redux 로직저장
import { createStore } from 'redux'
// 1. redux 불러오기
const redux = require('redux')

// 3. 리듀서 생성
// 리듀서는 상태와 액션을 받는 함수
const counterReducer = (state={counter:0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }   
    }
    if (action.type === 'decrement') {
        return {

            counter: state.counter - 1
        }
    }

    return state
}


// 2. store 생성
const store = createStore(counterReducer)

// 새롭게 추가
// react앱과 redux store연결
export default store


/* 기존 방법

// 4. component에서 구독
const counterSubscriber = () => {
    const latestState = store.getState()
}

// 5. 스토어에서 구독 읽어들이기
store.subscribe(counterSubscriber)

// 6. action
store.dispatch({type: 'increase'})
store.dispatch({type: 'decrease'})

*/