import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";

const AnimatedBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadTrianglesPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "triangles",
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: {
            value: "#0d0d0d", // Ganti sesuai tema kamu
          },
        },
      }}
    />
  );
};

export default AnimatedBackground;
