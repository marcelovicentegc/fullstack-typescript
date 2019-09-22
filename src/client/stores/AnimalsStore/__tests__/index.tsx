import { AnimalsStore } from "..";
import { RootStore } from "../../RootStore";

let rootStore: RootStore;
let animalsStore: AnimalsStore;
let mockedHandleMutation: jest.SpyInstance;
let mockedHandleCreate: jest.SpyInstance;
let mockedHandleUpdate: jest.SpyInstance;
let mockedHandleDelete: jest.SpyInstance;

beforeEach(() => {
  rootStore = new RootStore();
  animalsStore = new AnimalsStore(rootStore);
  mockedHandleMutation = jest.spyOn(animalsStore, "handleMutation");
  mockedHandleCreate = jest.spyOn(animalsStore, "handleCreate");
  mockedHandleUpdate = jest.spyOn(animalsStore, "handleUpdate");
  mockedHandleDelete = jest.spyOn(animalsStore, "handleDelete");
});

describe("AnimalsStore test suit", () => {
  test("handleMutation", () => {
    animalsStore.handleMutation();
    expect(mockedHandleMutation).toHaveBeenCalled();
    expect(animalsStore.mutation).toBe(true);
  });

  test("handleCreate", () => {
    animalsStore.handleCreate();
    expect(mockedHandleCreate).toHaveBeenCalled();
    expect(animalsStore.create).toBe(true);
    expect(animalsStore.helloworld).toBe(false);
  });

  test("handleUpdate", () => {
    animalsStore.handleUpdate();
    expect(mockedHandleUpdate).toHaveBeenCalled();
    expect(animalsStore.update).toBe(true);
    expect(animalsStore.helloworld).toBe(false);
  });

  test("handleDelete", () => {
    animalsStore.handleDelete();
    expect(mockedHandleDelete).toHaveBeenCalled();
    expect(animalsStore.delete).toBe(true);
    expect(animalsStore.helloworld).toBe(false);
  });
});
