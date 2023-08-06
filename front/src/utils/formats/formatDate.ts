import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (date: any, mask = "dd/MM/yyyy") => {
  if (!date) return null;
  const parsedDate = parseISO(date);
  return format(parsedDate, mask, {
    locale: ptBR,
  });
};
