'use client';
import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { initialData } from '@/utils/common';
import InnerList from './InnerList';
import { DragDropData } from '@/types';

const DragDropComponent: React.FC = () => {
  const [state, setState] = useState<DragDropData>(initialData as DragDropData);
  // reorder list after drag ends
  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    // Check if location of draggable changed. if true, the user dropped back into taken position
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    // Moving between same column
    if (start === finish) {
      const newTaskIds = [...start.taskId];

      newTaskIds.splice(source.index, 1); // Removes source index
      newTaskIds.splice(destination.index, 0, draggableId); // Adds draggableId item at destination index

      const newColumn = { ...start, taskId: newTaskIds }; // creates a new object for selected column with new task order

      // Sets state with new state without modifying other columns, but by adding only the new column value
      const newState = {
        ...state,
        columns: { ...state.columns, [newColumn.id]: newColumn },
      };
      setState(newState);
      return; // Exit out of this iteration
    }

    // Moving from one column to another
    const startTaskIds = [...start.taskId];
    startTaskIds.splice(source.index, 1); // Removing item from first column
    const newStartColumn = { ...start, taskId: startTaskIds }; // First column with spliced task list

    const finishTaskIds = [...finish.taskId];
    finishTaskIds.splice(destination.index, 0, draggableId); // Adds draggableId item at second column
    const newFinishColumn = { ...finish, taskId: finishTaskIds }; // First column with spliced task list

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };
    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div className="w-full h-full grid gap-x-4 gap-y-4 grid-cols-7" ref={provided.innerRef} {...provided.droppableProps}>
            {state.columnOrder.map((columnId, index) => {
              const column = state.columns[columnId];

              return (
                <div key={column.id} className="flex-1">
                  <InnerList column={column} workoutMap={state.workouts} index={index} />
                </div>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDropComponent;
