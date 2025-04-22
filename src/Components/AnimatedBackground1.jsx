import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";

const AnimatedBackground1 = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadTrianglesPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-footer"
      init={particlesInit}
      options={{
        preset: "triangles",
        fullScreen: { enable: false },
        background: { color: { value: "#0F0F1A" } },
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
        opacity : "20%"
      }}
    />
  );
};

export default AnimatedBackground1;
