import { daysInWeek } from '@/utils/date';

const days = daysInWeek();

const workouts = {
  "workout-1": {
    id: "workout-1", name: "Chest Day - with Arm exercises", exercises: [
      { id: "0", "name": "Bench Press Medium Grip", description: "50 lb x 5, 60 lb x 5, 70 lb x 5", reps: 3 },
      { id: "0", "name": "Exercise B", description: "40 lb x 10", reps: 1 }
    ]
  },
  "workout-2": {
    id: "workout-2", name: "Leg DaY", exercises: [
      { id: "0", "name": "Exercise C", description: "30 lb x 6", reps: 1 },
      { id: "0", "name": "Exercise D", description: "40 lb x 5", reps: 1 },
      { id: "0", "name": "Exercise E", description: "50 lb x 5", reps: 1 }
    ]
  },
  "workout-3": {
    id: "workout-3", name: "Arm day", exercises: [
      { id: "0", "name": "Exercise F", description: "60 lb x 6", reps: 1 },
    ]
  },
};

const getWorkoutByIndex = (index: number) => {
  switch (index) {
    case 1:
      return ["workout-1"];
    case 2:
      return ["workout-2", "workout-3"];
  }
  return [];
}


export const initialData = {
  workouts,
  columns: days.reduce((acc: { [key: string]: unknown }, day, index) => {
    acc[day.day.toLowerCase()] = {
      id: day.day.toLowerCase(),
      subTitle: day.date,
      isHighlight: day.isToday,
      title: day.day,
      isShowAddBtn: day.isShowAddBtn,
      taskId: getWorkoutByIndex(index),
    };
    return acc;
  }, {}),
  columnOrder: days.map(day => day.day.toLowerCase()),
};


