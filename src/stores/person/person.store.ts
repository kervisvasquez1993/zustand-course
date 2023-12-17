import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
// import { customSessionStorage } from "../storages/session.storage";
import { firebaseStorage } from "../storages/firebase.storage";

interface PersonState {
  firsName: string;
  lastName: string;
}

interface Actions {
  setFirsName: (value: string) => void;
  setLastName: (value: string) => void;
}
const storeApi: StateCreator<
  PersonState & Actions,
  [["zustand/devtools", never]]
> = (set) => ({
  firsName: "",
  lastName: "",
  setFirsName: (value: string) =>
    set(({ firsName: value }), false, "setFirstName"),
  setLastName: (value: string) =>
    set((state) => ({ lastName: value }), false, "setLastName"),
});

export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(storeApi, {
      name: "person-storage",
      storage: firebaseStorage,
    })
  )
);
