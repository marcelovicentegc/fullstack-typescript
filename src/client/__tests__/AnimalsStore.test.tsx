import { AnimalsStore } from "../stores";
import { rootStore } from "../stores/RootStore";

describe("AnimalsStore suite", () => {
  const animalsStore = new AnimalsStore(rootStore);

  beforeEach(() => {
    (animalsStore.helloworld = true),
      (animalsStore.create = false),
      (animalsStore.update = false),
      (animalsStore.delete = false),
      (animalsStore.mutation = false);
  });

  it('Handles the "create" global state', () => {
    animalsStore.handleCreate();
    expect(animalsStore.create).toBe(true);
    expect(animalsStore.helloworld).toBe(false);
  });

  it('Handles the "update" global state', () => {
    animalsStore.handleUpdate();
    expect(animalsStore.update).toBe(true);
    expect(animalsStore.helloworld).toBe(false);
  });

  it('Handles the "delete" global state', () => {
    animalsStore.handleDelete();
    expect(animalsStore.delete).toBe(true);
    expect(animalsStore.helloworld).toBe(false);
  });

  it('Handles the "mutation" global state', () => {
    animalsStore.handleMutation();
    expect(animalsStore.mutation).toBe(true);
  });
});
