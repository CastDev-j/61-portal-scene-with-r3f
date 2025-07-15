import portalVertexShader from "../../shaders/portal/vertex.glsl";
import portalFragmentShader from "../../shaders/portal/fragment.glsl";

import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";
import type { JSX } from "react";

export const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new Color("#383838"),
    uColorEnd: new Color("#b4b4fe"),
  },
  portalVertexShader,
  portalFragmentShader
);

declare module "@react-three/fiber" {
  interface ThreeElements {
    portalMaterial: JSX.IntrinsicElements["shaderMaterial"] & {
      uTime: number;
      uColorStart: Color;
      uColorEnd: Color;
    };
  }
}

