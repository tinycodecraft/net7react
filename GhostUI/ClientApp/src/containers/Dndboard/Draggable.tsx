import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function Draggable({children}:{ children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable"
  });
  const style = transform
    ? {
      transform: CSS.Translate.toString(transform),
      }
      
    : undefined;
  // const style = {
  //   transform: CSS.Translate.toString(transform),
  // }
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}
export default Draggable;
