import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const Atomdata = atomWithStorage("test", [
  {
    id: Math.random(),
    title: "Testing",
    status: false,
  },
]);

export { Atomdata };
