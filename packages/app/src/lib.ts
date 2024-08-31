import { getValue } from "shared";

export const getStatement = async () => {
  return `the value is ${await getValue()}.`;
}
