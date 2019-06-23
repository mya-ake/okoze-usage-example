import { useReducer, VueUseReducer } from 'vue-use-reducer';

interface State extends VueUseReducer.State {
  authenticated: boolean;
}

const createInitialState = (): State => {
  return {
    authenticated: false,
  };
};

type AuthenticateAction = {
  type: 'AUTHENTICATE';
  payload: {
    token: string;
  };
};

type Action =
  | AuthenticateAction
  | {
      type: 'SIGN_OUT';
    };

const reducer: VueUseReducer.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'AUTHENTICATE':
      return {
        ...state,
        authenticated: true,
      };
    case 'SIGN_OUT':
      return createInitialState();
  }
};

const [authState, authDispatch] = useReducer(reducer, createInitialState());

export { authState, authDispatch };
