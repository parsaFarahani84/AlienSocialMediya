import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const Atomdata = atomWithStorage("test", []);

export { Atomdata };
