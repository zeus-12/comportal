export const allowedCategories = [
  "health_hygiene",
  "sports",
  "technical",
  "other",
];

export const toTitleCase = (str) => {
  str = str.split("_").join(" ");
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
