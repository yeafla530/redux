/*
    일반적으로 리덕스를 사용할 때 리듀서 내부에서 다른일 하는게 목표
    그래서 reducer 내부에 action이 있는 것

*/

const redux = require('redux')

// 새로운 상태 객체를 리턴해야함
// 리듀서는 순수한 함수가 되어야함
// 순수 = 동일한 입력값을 넣었을 때 같은 출력이 산출되어야함
// ex ) 쓰면 안되는 것 = http 요청전송, 로컬 스토리지 기록, 로컬 저장소 불러오기
// 리듀서는 리덕스가 제공하는 입력을 취하고
// 예상된 출력물안 새로운 상태 객체를 생성하는 순수한 함수가 되어야함


// 기본적인 reducer 형태
// 맨 처음에 실행될 때는 기존 상태가 없기 때문에 default value설정
const counterReducer = (state = {counter: 0}, action) => {
    // 
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
};

// 어떤 리듀서가 저장소를 변경하는지 저장소에게 알려주기
// 저장소와 작업하는 것은 리듀서
// counterReducer 가리키기
const store = redux.createStore(counterReducer);

// {counter: 1} => 처음 실행될 때 +1을 더해주기 때문에
// 0이 아닌 1이 출력됨
// console.log('초기 상태', store.getState())
// 구독
// 저장소에서 쓸 수 있는 getState
// 업데이트 된 후에 최신상태 스냅샷 제공
const counterSubscriber = () => {
    // 최신상태
    const latestState = store.getState()
    console.log('구독', latestState)
}

// 데이터가 변경될 때마다 실행
// counterSubscriber 가리키기
// 실제로 동작하는 것은 redux
store.subscribe(counterSubscriber)

// dispatch : 액션을 발송하는 메소드
// 액션은 js 객체
// 식별자 역할을 하는 타입 프로퍼티를 가진 js 객체 
// 고유한 문자열이어야한다 
// 새로운 액션을 발송했기 때문에 구독 {counter: 2} 출력
store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})


