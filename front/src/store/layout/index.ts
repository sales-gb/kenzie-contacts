import { create } from "zustand";
import { persist } from "zustand/middleware";

type StateProps = {
  isDesk: boolean;
};

type ActionsProps = {
  setDesk: (value: boolean) => void;
};

export const useLayoutStore = create(
  persist<StateProps & ActionsProps>(
    (set) => ({
      isDesk: true,
      setDesk: (value) => set(() => ({ isDesk: value })),
    }),
    {
      name: "layout-store",
    }
  )
);
