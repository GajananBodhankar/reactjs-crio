import { SetStateAction } from "react";

function handleClear(
  setInput: { (value: any): void; (arg0: number): void },
  setClear: { (value: SetStateAction<number>): void; (arg0: number): void }
) {
  setInput(0);
  setClear(0);
}

function handleDelete(input: any, setInput: any) {
  let temp = input.toString();
  if (temp.length > 1) {
    setInput(temp.slice(0, temp.length - 1));
  } else {
    setInput(0);
  }
}

function handleNum(value, input, setInput) {
  let r = /[*+-/]/;
  if (value || input != 0) {
    setInput((prev: number) => {
      if (prev == 0) {
        return value;
      } else if (r.test(prev[prev.toString().length - 1]) && value == 0) {
        return prev;
      } else {
        return prev.toString().concat(value);
      }
    });
  }
}

function handleResult(
  input: string,
  setResult: { (value: any): void; (arg0: any): void },
  setInput
) {
  try {
    setInput(eval(input));
    setResult(eval(input));
  } catch (e) {
    alert(`${e}`);
  }
}

export { handleClear, handleDelete, handleNum, handleResult };
