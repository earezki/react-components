import { useReducer } from "react";

function stateReducer<T>(state: T, action: Partial<T>): T {
  return { ...state, ...action };
}

export function useStateReducer<T>(initialState: T) {
  return useReducer<React.Reducer<T, Partial<T>>>(stateReducer, initialState);
}
