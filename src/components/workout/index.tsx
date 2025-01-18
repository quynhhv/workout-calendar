import React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { Workout } from '@/types';
import Dots from '@/components/icons/dots';
import { colors } from '../../../colors';
import Exercise from '@/components/workout/exercise';
import AddIcon from '@/components/icons/add';

interface WorkoutProps {
  workout: Workout;
  index: number;
}

const WorkoutComponent: React.FC<WorkoutProps> = (props) => {
  return (
    <Draggable draggableId={props.workout.id} index={props.index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`flex flex-col border border-[#DFDFDF] rounded-lg p-1 flex min-h-[100px] mb-1.5 opacity-80  ${snapshot.isDragging ? 'bg-[#e2efff]' : 'bg-white'}`}
        >
          <div className="flex items-center flex-row justify-between px-1">
            <p className="text-[10px] text-primary  truncate font-bold mr-2">{props.workout.name.toUpperCase()}</p>
            <div>
              <Dots color={props.workout.id === 'workout-1' ? colors.primary : colors.slate500} />
            </div>
          </div>
          <div className="flex flex-col mt-2">
            {props.workout.exercises.map((exercise, index) => (
              <Exercise key={index} exercise={exercise} />
            ))}
          </div>
          <div className="flex justify-end">
            <AddIcon />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default WorkoutComponent;
