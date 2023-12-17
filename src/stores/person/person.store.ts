import { type StateCreator, create } from "zustand";
import {  persist } from "zustand/middleware";
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
const storeApi: StateCreator<PersonState & Actions> = (set) => ({
  firsName: "",
  lastName: "",
  setFirsName: (value: string) => set((state) => ({ firsName: value })),
  setLastName: (value: string) => set((state) => ({ lastName: value })),
});



export const usePersonStore = create<PersonState & Actions>()(
  persist(storeApi, {
    name: "person-storage",
    storage : firebaseStorage,
  })
);
