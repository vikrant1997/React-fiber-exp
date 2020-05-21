import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useFrame } from "react-three-fiber";
import DirectionalLight from "three";

function Lights(props) {
  const { type } = props;
  const Light = type;
  const lightRef = useRef();
  // useFrame(() => {
  //   // console.log(lightRef.current.target.position);
  //   lightRef.current.target.position.set(-100, 200, 0);
  // });
  // <DirectionalLight />;

  return <Light ref={lightRef} {...props} target />;
}

Lights.propTypes = {
  type: PropTypes.string,
};

Lights.defaultProps = {
  type: "",
};

export default Lights;
