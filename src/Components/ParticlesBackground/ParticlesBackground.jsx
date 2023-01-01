import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import ThemeContext from "../../Context/ThemeContext";
import { useContext } from "react";

const ParticlesBackground = () => {
  const { mode } = useContext(ThemeContext);

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={ {
      background: {
          color: {
              value: mode === "light" ? "#f8f8f8" : "#111111",
          },
      },
      fpsLimit: 120,
      fullScreen: {
          zIndex: -1
      },
      interactivity: {
          events: {
              onClick: {
                  enable: false,
                  mode: "push",
              },
              onHover: {
                  enable: false,
                  mode: "repulse",
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
      },
      particles: {
          color: {
              value: mode === "light" ? "#000" : "#fff",
          },
          links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
          },
          collisions: {
              enable: true,
          },
          move: {
              directions: "none",
              enable: true,
              outModes: {
                  default: "bounce",
              },
              random: false,
              speed: 1.4,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 2000,
              },
              value: 80,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
  }}
/>
  )
}

export default ParticlesBackground