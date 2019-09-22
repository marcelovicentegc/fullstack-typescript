import { AnimalsStore } from "./AnimalsStore";
import { createContext } from "react";

export class RootStore {
  public animalsStore: AnimalsStore;

  public constructor() {
    this.animalsStore = new AnimalsStore(this);

    return {
      animalsStore: this.animalsStore
    };
  }
}

export const rootStore = new RootStore();
export const rootStoreContext = createContext(rootStore);
