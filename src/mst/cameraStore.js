import { types } from "mobx-state-tree";
import { values } from "mobx";

const CameraStore = types
  .model({
    camera: types.frozen(),
  })
  .actions((self) => ({
    setCamera: (value) => (self.camera = value),
  }));
export default CameraStore;
