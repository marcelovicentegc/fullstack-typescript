import { AnimalsStore } from "./AnimalsStore.store";

export class RootStore {
  public animalsStore: AnimalsStore;

  public constructor() {
    this.animalsStore = new AnimalsStore(this);

    return {
      animalsStore: this.animalsStore
    };
  }
}
