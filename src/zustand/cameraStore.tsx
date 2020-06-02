import create from "zustand";
import { Camera } from "react-three-fiber";
import { PerspectiveCamera } from "three";

const [cameraStore] = create((set) => ({
  storedCamera: new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  ),
  setCamera: (value: PerspectiveCamera) =>
    set((state) => ({ storedCamera: value })),
}));

export default cameraStore;
