import { create } from "zustand";
import { persist } from "zustand/middleware";
interface Bear {
  id: number;
  name: string;
}
interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  bears: Bear[];

  increaseBlackBears: (by: number) => void;
  increasePolarBears?: (by: number) => void;
  increasePandaBears?: (by: number) => void;

  doNothing: () => void;
  addBear: () => void;
  clearBears: () => void;

  computed: {
    totalBears: number;
  };
}

export const useBearStore = create<BearState>()(
  persist(
    (set, get) => ({
      blackBears: 10,
      polarBears: 5,
      pandaBears: 1,
      bears: [{ id: 1, name: "Panda 1" }],

      computed: {
        get totalBears() {
          return get().blackBears + get().polarBears + get().pandaBears;
        },
      },

      increasePolarBears: (by) =>
        set((state) => ({ polarBears: state.polarBears + by })),
      increaseBlackBears: (by) =>
        set((state) => ({ blackBears: state.blackBears + by })),
      increasePandaBears: (by) =>
        set((state) => ({ pandaBears: state.pandaBears + by })),
      doNothing: () => set((state) => ({ bears: [...state.bears] })),
      addBear: () =>
        set((state) => ({
          bears: [
            ...state.bears,
            {
              id: state.bears.length + 1,
              name: "Oso" + state.bears.length + 1,
            },
          ],
        })),
      clearBears: () => set({ bears: [] }),
    }),
    { name: "bears" }
  )
);
