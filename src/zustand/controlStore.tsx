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

  setmoveLeft: (value: boolean) => set((state) => ({ moveLeft: value })),
  setmoveRight: (value: boolean) => set((state) => ({ moveRight: value })),
  setZoomIn: (value: boolean) => set((state) => ({ zoomIn: value })),
  setZoomOut: (value: boolean) => set((state) => ({ zoomOut: value })),
  setmoveForward: (value: boolean) => set((state) => ({ moveForward: value })),
  setmoveOut: (value: boolean) => set((state) => ({ moveOut: value })),
  setmoveTop: (value: boolean) => set((state) => ({ moveTop: value })),
  setmoveDown: (value: boolean) => set((state) => ({ moveDown: value })),
  setPointerLock: () => set((state) => ({ pointerLock: !state.pointerLock })),
  setFpControl: (value: boolean) => set((state) => ({ fPControl: value })),
  setOpControl: (value: boolean) => set((state) => ({ oPControl: value })),
  setmouseLook: (value: boolean) => set((state) => ({ mouseLook: value })),
}));

export default controlStore;
