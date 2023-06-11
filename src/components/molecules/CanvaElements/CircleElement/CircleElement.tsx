import { useState } from "react";
import { Circle } from "react-konva";

interface CircleElementProps {
  initialX: number;
  initialY: number;
}

const CircleElement = ({ initialX, initialY }: CircleElementProps) => {
  const handleMouseEnter = (event: any) => {
    event.target.getStage().container().style.cursor = "pointer";
  };

  const handleMouseLeave = (event: any) => {
    event.target.getStage().container().style.cursor = "default";
  };

  const [position, setPosition] = useState({
    x: initialX,
    y: initialY,
  });

  const handleDragMove = (event: any) => {
    const { x, y } = event.target.attrs;
    setPosition({ x, y });
  };

  return (
    <Circle
      x={position.x}
      y={position.y}
      radius={50}
      fill="gray"
      draggable
      onDragMove={handleDragMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default CircleElement;
