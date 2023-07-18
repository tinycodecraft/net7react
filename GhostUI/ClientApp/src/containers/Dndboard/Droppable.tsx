import type {  FC,ReactNode } from "react";
import { useDroppable, type UniqueIdentifier } from "@dnd-kit/core";


export const  Droppable:FC<{children:ReactNode, id: UniqueIdentifier}> =({ children, id }) => {
  const { isOver, setNodeRef } = useDroppable({id});
  const style = {
    color: isOver ? "green" : undefined,
    width: "300px",
    height: "100px",
    border: "1px solid blue",
    marginBottom: "10px"
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}


