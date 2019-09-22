import { action, observable } from "mobx";
import { RootStore } from "../RootStore";

export class ErrorStore {
  protected rootStore: RootStore;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable public errorMessage = "";

  @action public setErrorMessage = (errorMessage: string) => {
    this.errorMessage = errorMessage;
  };
}
