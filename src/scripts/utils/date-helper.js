const DateHelper = {
  formatLongDateId(date) {
    const dateFormatter = new Intl.DateTimeFormat(
      'id',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }
    );
    return dateFormatter.format(date);
  },
};
export default DateHelper;