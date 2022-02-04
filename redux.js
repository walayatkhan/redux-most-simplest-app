const { createStore } = require("redux");

const BUY_CAKE = "BUY_CAKE";

/// here is the action function
const myAction = (payload) => {
  return { type: BUY_CAKE, payload: payload };
};

let initialState = { numberOfCakes: 10 };
// here is the reducer function
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(myReducer);
store.dispatch(myAction(5));

console.log("after dispatch", store.getState());
