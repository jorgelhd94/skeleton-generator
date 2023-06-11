import { Stage, Layer } from "react-konva";
import { useState } from "react";
import CircleElement from "../CanvaElements/CircleElement/CircleElement";

const initialForms = [
  {
    id: "rect1",
    x: 60,
    y: 60,
    width: 100,
    height: 100,
    fill: "red",
  },
  {
    id: "rect2",
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    fill: "green",
  },
];

const Canva = () => {
  const [rectangles, setRectangles] = useState(initialForms);
  const [selectedId, selectShape] = useState<string | null>(null);

  const checkDeselect = (event: any) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = event.target === event.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <>
      <div className="w-max h-max border-gray-200 bg-gray-200 border-2 text-neutral-content">
        <Stage
          width={200}
          height={200}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
        >
          <Layer>
          {rectangles.map((rect, i) => {
          return (
            <CircleElement
              key={i}
              shapeProps={rect}
              isSelected={rect.id === selectedId}
              onSelect={() => {
                selectShape(rect.id);
              }}
              onChange={(newAttrs: any) => {
                const rects = rectangles.slice();
                rects[i] = newAttrs;
                setRectangles(rects);
              }}
            />
          );
        })}
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default Canva;
