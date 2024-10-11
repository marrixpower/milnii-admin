import { format, parseISO } from 'date-fns';

export const capitalizeFirstLetter = (string?: string) => {
  if (!string) return '-';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const dateFormat = `dd MMM, yyyy 'at' HH:mm`;

export const formattedDate = (date?: string, myFormat?: string) =>
  date ? format(parseISO(date), myFormat || dateFormat) : '-';
