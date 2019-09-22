import { AnimalsStore, ErrorStore } from ".";
import { createContext } from "react";

export class RootStore {
  public animalsStore: AnimalsStore;
  public errorStore: ErrorStore;

  public constructor() {
    this.animalsStore = new AnimalsStore(this);
    this.errorStore = new ErrorStore(this);

    return {
      animalsStore: this.animalsStore,
      errorStore: this.errorStore
    };
  }
}

export const rootStore = new RootStore();
export const rootStoreContext = createContext(rootStore);
