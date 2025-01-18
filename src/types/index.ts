export interface DayOfWeekType {
  day: string
  date: number
}
export type Exercise = {
  id: string;
  name: string;
  description: string;
  reps: number;
};

export type Workout = {
  id: string;
  name: string;
  exercises: Exercise[];
};

export type ColumnInfo = {
  id: string;
  title: string;
  subTitle: string;
  taskId: string[];
  isHighlight: boolean;
  isShowAddBtn: boolean
};

export type DragDropData = {
  workouts: { [key: string]: Workout };
  columns: { [key: string]: ColumnInfo };
  columnOrder: string[];
};

export interface TaskType {
  id: string;
  content: string;
}

