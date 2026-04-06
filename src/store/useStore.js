import { create } from "zustand";

const getSavedTransactions = () => {
  try {
    const data = localStorage.getItem("tx");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

export const useStore = create((set) => ({
  role: "viewer",

  setRole: (role) => set({ role }),

  transactions: getSavedTransactions(),

  addTransaction: (tx) =>
    set((state) => {
      const updated = [...state.transactions, tx];
      localStorage.setItem("tx", JSON.stringify(updated));
      return { transactions: updated };
    }),
}));