'use client';
import Column from '@/components/column';
import { ColumnInfo, Workout } from '@/types';
import React from 'react';

interface InnerListProps {
  column: ColumnInfo;
  workoutMap: { [key: string]: Workout };
  index: number;
}

const InnerList: React.FC<InnerListProps> = ({ column, workoutMap }) => {
  const workouts = column.taskId.map((taskId: string | number) => workoutMap[taskId]);
  return <Column key={column.id} column={column} workouts={workouts} />;
};

InnerList.displayName = 'InnerList';
export default React.memo(InnerList);
