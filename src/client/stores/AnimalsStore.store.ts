import { action, observable } from "mobx";
import { RootStore } from "./RootStore.store";

export class AnimalsStore {
  protected rootStore: RootStore;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable public species: string = undefined;
  @observable public favoriteFood: string = undefined;
  @observable public selected: string = undefined;

  @observable public displayList: boolean = true;
  @observable public mutation: boolean = false;

  @observable public helloworld: boolean = true;
  @observable public create: boolean = false;
  @observable public update: boolean = false;
  @observable public delete: boolean = false;

  @action public handleMutation = () => {
    this.mutation ? null : (this.mutation = true);
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
