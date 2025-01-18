export const daysInWeek = () => {
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const today = new Date();
  const todayIndex = (today.getDay() + 6) % 7; // 0 (Monday) to 6 (Sunday)
  const startOfWeek = new Date();
  startOfWeek.setDate(today.getDate() - todayIndex);
  const endOfWeek = new Date();
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  const arrAddBtnList = [1, 3];
  const weekDates = daysOfWeek.map((day, index) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + index);
    return { day, date: date.getDate(), isToday: date.getDate() === today.getDate(), isShowAddBtn: arrAddBtnList.includes(index) };
  });
  return weekDates;
}
