import { Canvas } from "@react-three/fiber";
import { Mac } from "./Mac";
import { Suspense, useState } from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as web } from "@react-spring/web";
import { MacModelContainer, MacModelSmallContainer, MacModelSmallLeft } from "./Mac.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export function PrabMac() {
  const [open, setOpen] = useState(false);
  const props = useSpring({ open: Number(open) });

  const containerStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: props.open.to((o) => (o === 1 ? `url()` : "url()")),
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // borderRadius: "2%",
    // border: "1px solid #000",
    // boxShadow: props.open.to((o) => (o === 1 ? "1px 1px 5px 5px #000" : "1px 1px 10px 10px #000")), // Adding boxShadow for glow
    // overflow: "hidden",
  };

  return (
    <>
      <MacModelContainer>
        <MacModelSmallContainer>
          <span>M E R N </span>
          <hr />
        </MacModelSmallContainer>
        <web.main style={containerStyle}>
          <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Suspense fallback={null}>
              <group
                rotation={[0, Math.PI, 0]}
                onClick={(e) => (e.stopPropagation(), setOpen(!open))}
              >
                <Mac
                  open={open}
                  hinge={props.open.to([0, 1], [1.575, -0.425])}
                />
              </group>
              <Environment preset="city" />
            </Suspense>
            <ContactShadows
              position={[0, -4.5, 0]}
              scale={20}
              blur={2}
              far={4.5}
            />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.2}
              maxPolarAngle={Math.PI / 2.2}
            />
          </Canvas>
        </web.main>
        <MacModelSmallLeft>
          <FontAwesomeIcon icon={faCode} />
          {/* <span>C O D E </span> */}
          <span>C O D E </span> 
        </MacModelSmallLeft>
      </MacModelContainer>
    </>
  );
}
