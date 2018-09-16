import { ProgressActionsUnion, ProgressTypes } from './loading-block.actions';


export interface ProgressState {
  inProgress: boolean;
}

export const initialState: ProgressState = {
  inProgress: false,
};

export function progressReducer(state = initialState, action: ProgressActionsUnion): ProgressState {
  switch (action.type) {
    case ProgressTypes.Start: {
      return {
        ...state,
        inProgress: true,
      };
    }

    case ProgressTypes.Finish: {
      return {
        ...state,
        inProgress: false,
      };
    }

    default: {
      return state;
    }
  }
}

