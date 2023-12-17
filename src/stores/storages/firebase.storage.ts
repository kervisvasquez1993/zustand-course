import { StateStorage, createJSONStorage } from "zustand/middleware";

const firebaseUrl =
  "https://zustand-stotage-kervis-default-rtdb.firebaseio.com/zustand";

const storeAPi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${firebaseUrl}/${name}.json`).then((res) =>
        res.json()
      );
      console.log(data);
      return JSON.stringify(data);
    } catch (error) {
      throw error;
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    const data = await fetch(`${firebaseUrl}/${name}.json`, {
      method: "PUT",
      body: value,
    }).then((res) => res.json());
    console.log(data);
    return;
  },
  removeItem: function (name: string): void | Promise<void> {
    throw new Error("Function not implemented.");
  },
};

export const firebaseStorage = createJSONStorage(() => storeAPi);
