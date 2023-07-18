import React, { useState, type FunctionComponent } from 'react'
import { Droppable } from './Droppable'
import  Draggable from './Draggable'
import { DndContext, type DragEndEvent,type UniqueIdentifier} from '@dnd-kit/core'


const Dndboard:FunctionComponent = () => {
  const [Dropped, setDropped] = useState<UniqueIdentifier| null>(null);
  const containers = ["A", "B", "C"];

  const draggableMarkup = <Draggable>Drag me</Draggable>;

  const handleDragEnd = ({ over }: DragEndEvent) => {
    
    if (over && over.id) {
      setDropped(over.id);
    }
  };

  return (
    <div className="App">
      <DndContext onDragEnd={handleDragEnd}>
        {Dropped === null ? draggableMarkup : null}
        {containers.map((id) => {
          return (
            <Droppable id={id} key={id}>
              {Dropped === id ? draggableMarkup : null}
              container-{id}
            </Droppable>
          );
        })}
      </DndContext>
    </div>
  );
}

export default Dndboard
