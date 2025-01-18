'use client';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import WorkoutComponent from './workout';
import AddIcon from './icons/add';
import { ColumnInfo, Workout } from '@/types';

interface ColumnProps {
  column: ColumnInfo;
  workouts: Workout[];
  isDropDisabled?: boolean;
}

// Perf Optimization
const InnerList: React.FC<{ workouts: Workout[] }> = React.memo(({ workouts }) =>
  workouts.map((workout, index) => <WorkoutComponent key={workout.id} workout={workout} index={index} />),
);

const Column: React.FC<ColumnProps> = ({ column, workouts }) => {
  return (
    <div className="m-2 bg-white flex flex-col h-full w-full">
      <h3 className="pb-2 text-[10px] text-slate500 font-semibold">{column.title}</h3>
      <div className="flex flex-1 flex-col bg-slate100 rounded-md p-2">
        <div className="flex  flex-row justify-between mb-2 ">
          <p className={`text-[11px] text-lightGrey font-semibold ${column.isHighlight ? 'text-primary text-bold' : 'text-slate600'}`}>
            {column.subTitle}
          </p>
          {column.isShowAddBtn && <AddIcon />}
        </div>
        <Droppable droppableId={column.id} isDropDisabled={false} type="task">
          {(provided) => (
            <div
              className={`transition-colors duration-200 ease-in-out flex-grow min-h-[100px]`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <InnerList workouts={workouts} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Column;
