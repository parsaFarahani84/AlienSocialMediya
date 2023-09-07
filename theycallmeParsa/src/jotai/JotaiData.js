import { atom } from "jotai";

const Atomdata = atom([
  {
    id: Math.random(),
    title: "Testing",
    status: false,
  },
]);
export { Atomdata };
