import { useReducer, VueUseReducer } from 'vue-use-reducer';

interface State extends VueUseReducer.State {
  token: string;
  authenticated: boolean;
}

const createInitialState = (): State => {
  return {
    token: '',
    authenticated: false,
  };
};

const state = createInitialState();

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
        token: action.payload.token,
        authenticated: true,
      };
    case 'SIGN_OUT':
      return createInitialState();
  }
};

const [authState, authDispatch] = useReducer(reducer, state);

export { authState, authDispatch };
