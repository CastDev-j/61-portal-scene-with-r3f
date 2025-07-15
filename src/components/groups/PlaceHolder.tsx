import { Html } from "@react-three/drei";
import { useState } from "react";
import clsx from "clsx";

interface PlaceHolderProps {
  position?: [number, number, number];
  text?: string;
}

export const PlaceHolder = ({
  position = [0, 0, 0],
  text,
}: PlaceHolderProps) => {
  const [hidden, set] = useState(false);

  return (
    <mesh position={position} scale={1.5}>
      <boxGeometry />
      <meshNormalMaterial />

      <Html center position-y={1} occlude onOcclude={set}>
        <div
          className={clsx(
            " bg-neutral-950/70 text-purple-50 px-4 py-2 rounded-lg text-center select-none w-28",
            "transition-all duration-300 ease-in-out",
            hidden ? "opacity-0 scale-50" : "opacity-100 scale-100"
          )}
        >
          {text || "Loading..."}
        </div>
      </Html>
    </mesh>
  );
};
