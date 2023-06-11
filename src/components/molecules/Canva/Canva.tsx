import { Stage, Layer } from "react-konva";
import { useState } from "react";
import CircleElement from "../CanvaElements/CircleElement/CircleElement";

const Canva = () => {
  return (
    <>
      <div className="w-max h-max border-gray-200 border-2 text-neutral-content">
        <div className="card-body p-1">
          <Stage width={400} height={400}>
            <Layer>
              <CircleElement initialX={100} initialY={100} />
            </Layer>
          </Stage>
        </div>
      </div>
    </>
  );
};

export default Canva;
