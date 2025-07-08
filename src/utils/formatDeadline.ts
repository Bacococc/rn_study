export const formatDeadline = (isoString: string) => {
  const deadline = new Date(isoString);
  const now = new Date();

  const isToday =
    deadline.getFullYear() === now.getFullYear() &&
    deadline.getMonth() === now.getMonth() &&
    deadline.getDate() === now.getDate();

  const hours = deadline.getHours().toString().padStart(2, "0");
  const minutes = deadline.getMinutes().toString().padStart(2, "0");

  if (isToday) {
    return `오늘 ${hours}:${minutes}`;
  } else {
    return `${deadline.getMonth() + 1}월 ${deadline.getDate()}일 ${hours}:${minutes}`;
  }
};