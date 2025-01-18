import React from 'react';
import { Exercise as ExerciseType } from '@/types';

interface ExerciseProps {
  exercise: ExerciseType;
}

const ExerciseComponent: React.FC<ExerciseProps> = ({ exercise }) => {
  return (
    <div className="flex flex-col border border-[#DFDFDF] rounded-lg px-2 pb-2 pt-0 mb-[4px] bg-background shadow-sm">
      <p className="text-right font-semibold truncate text-[13px] mt-1 ml-3">{exercise.name}</p>
      <div className="flex flex-row justify-between">
        <p className="text-sm text-slate500 text-[10px] font-bold mr-2 text-[##95A6B7]">{exercise.reps}x</p>
        <p className="text-sm text-slate600 text-[10px] truncate text-[##95A6B7]">{exercise.description}</p>
      </div>
    </div>
  );
};

export default ExerciseComponent;
