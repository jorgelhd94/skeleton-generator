import { useRef, useEffect } from "react";
import { Circle, Transformer } from "react-konva";

interface CircleElementProps {
  shapeProps: any;
  isSelected: boolean;
  onSelect: CallableFunction;
  onChange: CallableFunction;
}

const CircleElement = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
}: CircleElementProps) => {
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  const handleMouseEnter = (event: any) => {
    event.target.getStage().container().style.cursor = "pointer";
  };

  const handleMouseLeave = (event: any) => {
    event.target.getStage().container().style.cursor = "default";
  };

  const onTransformEnd = () => {
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    // we will reset it back
    node.scaleX(1);
    node.scaleY(1);
    onChange({
      ...shapeProps,
      x: node.x(),
      y: node.y(),
      // set minimal value
      width: Math.max(5, node.width() * scaleX),
      height: Math.max(node.height() * scaleY),
    });
  };

  useEffect(() => {
    if (isSelected && trRef.current) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Circle
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        radius={30}
        fill="gray"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTransformEnd={onTransformEnd}
      />

      {isSelected && (
        <Transformer
          ref={trRef}
          rotateEnabled={false}
          borderDash={[3, 3]}
          anchorFill="#4B6BFB"
          borderStroke="#4B6BFB"
          anchorStroke="#4B6BFB"
          anchorSize={5}
        />
      )}
    </>
  );
};

export default CircleElement;
