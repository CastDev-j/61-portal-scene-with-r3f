import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";
import { Performance } from "./performance/Performance";
import { ModelsGroup } from "./groups/ModelsGroup";

export const Experience = () => {
  const { bgColor } = useControls(
    "Environment",
    {
      bgColor: {
        value: "#171717",
        label: "BackGround Color",
      },
    },
    {
      collapsed: true,
    }
  );

  return (
    <div className={`h-screen w-screen`}>
      <Leva collapsed />

      <Canvas
        flat
        color={bgColor}
        camera={{
          fov: 75,
          position: [1, 0.5, 5],
          near: 0.1,
          far: 100,
        }}
        shadows
      >
        {/* Models */}
        <ModelsGroup />

        {/* Controls */}
        <OrbitControls makeDefault enablePan={false} />

        {/* Performance Monitor */}
        <Performance />

        {/* Background Color */}
        <color attach={"background"} args={[bgColor]} />
      </Canvas>
    </div>
  );
};
