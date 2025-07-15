import { Suspense } from "react";
import { PlaceHolder } from "./PlaceHolder";
import { Portal } from "../models/Portal";
import { Sparkles } from "@react-three/drei";

export const ModelsGroup = () => {
  return (
    <group>
      <Suspense
        fallback={<PlaceHolder position={[0, 0, 0]} text="Cargando Texto..." />}
      >
        <Portal />

        <Sparkles
          size={6}
          scale={[4, 2, 4]}
          position-y={0.5}
          speed={0.2}
          count={40}
        />
      </Suspense>
    </group>
  );
};
