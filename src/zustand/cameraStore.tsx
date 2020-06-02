import create from "zustand";
import { Camera } from "react-three-fiber";

// const [useStore] = create(set => ({
//     count: 0,
//     increase: () => set(state => ({ count: state.count + 1 })),
//     reset: () => set({ count: 0 })
//   }))
const [cameraStore] = create((set) => ({
  storedCamera: null,
  setCamera: (value: Camera) => set((state) => ({ storedCamera: value })),
}));

export default cameraStore;
