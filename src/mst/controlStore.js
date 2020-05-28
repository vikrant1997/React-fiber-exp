import { types } from "mobx-state-tree";

const ControlStore = types
  .model({
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
  })
  .actions((self) => ({
    setmoveLeft: (value) => (self.moveLeft = value),
    setmoveRight: (value) => (self.moveRight = value),
    setZoomIn: (value) => (self.zoomIn = value),
    setZoomOut: (value) => (self.zoomOut = value),
    setmoveForward: (value) => (self.moveForward = value),
    setmoveOut: (value) => (self.moveOut = value),
    setmoveTop: (value) => (self.moveTop = value),
    setmoveDown: (value) => (self.moveDown = value),
    setPointerLock: () => (self.pointerLock = !self.pointerLock),
    setFpControl: (value) => (self.fPControl = value),
    setOpControl: (value) => (self.oPControl = value),
    setmouseLook: (value) => (self.mouseLook = value),
  }));

// creating a tree based on the "Todo" type, with initial data:

export default ControlStore;
