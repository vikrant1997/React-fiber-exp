import create from "zustand";

// const [useStore] = create(set => ({
//     count: 0,
//     increase: () => set(state => ({ count: state.count + 1 })),
//     reset: () => set({ count: 0 })
//   }))
const [cameraStore] = create((set) => ({
  storedCamera: null,
  setCamera: (value) => set((state) => ({ storedCamera: value })),
}));

export default cameraStore;
