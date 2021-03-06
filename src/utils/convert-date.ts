export const convertDate = (providedDate: Date): string => {
  const date = new Date(providedDate);

  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();

  return `${d}-${m}-${y}`;
};
