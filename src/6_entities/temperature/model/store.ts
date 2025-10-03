import { create } from "zustand/react";
import { devtools } from "zustand/middleware";

interface TemperatureStoreState {
  temperature: number;
  setTemperature(temperature: number): void;
}

// noinspection JSUnusedGlobalSymbols
const useTemperatureStore = create<TemperatureStoreState>()(
  devtools(set => ({
    temperature: -273,

    setTemperature(temperature: number) {
      set({temperature});
    },
  }))
);

export { useTemperatureStore };
