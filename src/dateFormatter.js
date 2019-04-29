const { format, isSameDay } = require('date-fns');

export const formatDate = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  return isSameDay(dateToFormatTimeMillis, systemDateTimeMillis)
    ? 'TODAY'
    : format(dateToFormatTimeMillis, 'DD/MM/YYYY');
};
