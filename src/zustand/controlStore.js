import create from "zustand";

// const [useStore] = create(set => ({
//     count: 0,
//     increase: () => set(state => ({ count: state.count + 1 })),
//     reset: () => set({ count: 0 })
//   }))
const [controlStore] = create((set) => ({
  moveLeft: false,
  moveRight: false,
  zoomIn: false,
  zoomOut: false,
  moveForward: false,
  moveOut: false,
  moveTop: false,
  moveDown: false,
  pointerLock: false,
  fPControl: false,
  oPControl: true,
  mouseLook: false,

  setmoveLeft: (value) => set((state) => ({ moveLeft: value })),
  setmoveRight: (value) => set((state) => ({ moveRight: value })),
  setZoomIn: (value) => set((state) => ({ zoomIn: value })),
  setZoomOut: (value) => set((state) => ({ zoomOut: value })),
  setmoveForward: (value) => set((state) => ({ moveForward: value })),
  setmoveOut: (value) => set((state) => ({ moveOut: value })),
  setmoveTop: (value) => set((state) => ({ moveTop: value })),
  setmoveDown: (value) => set((state) => ({ moveDown: value })),
  setPointerLock: () => set((state) => ({ pointerLock: !state.pointerLock })),
  setFpControl: (value) => set((state) => ({ fPControl: value })),
  setOpControl: (value) => set((state) => ({ oPControl: value })),
  setmouseLook: (value) => set((state) => ({ mouseLook: value })),
}));

export default controlStore;
