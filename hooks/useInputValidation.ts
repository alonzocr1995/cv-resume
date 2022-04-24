import { ChangeEvent, FocusEvent, useReducer } from "react";

interface IState {
  value: string;
  isTouched: boolean;
}

const initialState: IState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state: any, action: any) => {
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
};

export const useInputValidation = (validateInput: any) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);
  const isValid = validateInput(inputState?.value);
  const hasError = !isValid && inputState?.isTouched;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: "CHANGE", value: e.target.value });
  };
  const handleInputBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: "BLUR" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState?.value,
    isTouched: inputState?.isTouched,
    isValid,
    hasError,
    handleInputChange,
    handleInputBlur,
    reset,
  };
};
