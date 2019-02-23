import { observable } from "mobx";

class AnimalsStore {
  @observable animalsList = [
    {
      favoriteFood: ""
    }
  ];
}

export default new AnimalsStore();
