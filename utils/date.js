export const isostringToDate = (d) => {
  if (!d) {
    return d;
  }
  var date = new Date(d.toString());
  return date.toISOString().substring(0, 10);
};
