export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("uk-UA", {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};
