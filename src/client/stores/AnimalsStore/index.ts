import { action, observable } from "mobx";
import { RootStore } from "../RootStore";

export class AnimalsStore {
  protected rootStore: RootStore;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable public species: string | undefined = undefined;
  @observable public favoriteFood: string | undefined = undefined;
  @observable public selected: string | undefined = undefined;

  @observable public displayList = true;
  @observable public mutation = false;

  @observable public helloworld = true;
  @observable public create = false;
  @observable public update = false;
  @observable public delete = false;

  @action public handleMutation = () => {
    this.mutation = true;
  };
  @action public handleCreate = () => {
    this.create = true;
    this.helloworld = false;
  };
  @action public handleUpdate = () => {
    this.update = true;
    this.helloworld = false;
  };
  @action public handleDelete = () => {
    this.delete = true;
    this.helloworld = false;
  };
}
