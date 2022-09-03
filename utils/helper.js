export const allowedCategories = [
  "health_hygiene",
  "electricity",
  "plumbing",
  "staff",
  "other",
];

export const categoryData = [
  { value: "health_hygiene", label: "Health and Hygiene" },
  { value: "electricity", label: "Electricity" },
  { value: "plumbing", label: "Plumbing" },
  { value: "staff", label: "Staff" },
  { value: "other", label: "Other" },
];

export const toTitleCase = (str) => {
  str = str.split("_").join(" ");
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
