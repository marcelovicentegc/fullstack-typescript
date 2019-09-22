import { ErrorStore } from "..";
import { RootStore } from "../../RootStore";

let rootStore: RootStore;
let errorStore: ErrorStore;
let mockedSetErrorMessage: jest.SpyInstance;

beforeEach(() => {
  rootStore = new RootStore();
  errorStore = new ErrorStore(rootStore);
  mockedSetErrorMessage = jest.spyOn(errorStore, "setErrorMessage");
});

describe("ErrorStore test suit", () => {
  test("setErrorMessage", () => {
    errorStore.setErrorMessage("errored");
    expect(mockedSetErrorMessage).toHaveBeenCalled();
    expect(errorStore.errorMessage).toBe("errored");
  });
});
