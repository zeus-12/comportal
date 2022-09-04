export const allowedCategories = [
  "health_hygiene",
  "electrical",
  "plumbing",
  "staff",
  "other",
];

export const categoryData = [
  { value: "health_hygiene", label: "Health and Hygiene" },
  { value: "electrical", label: "Electrical" },
  { value: "plumbing", label: "Plumbing" },
  { value: "staff", label: "Staff" },
  { value: "other", label: "Other" },
];

export const isostringToDate = (d) => {
  if (!d) {
    return d;
  }
  var date = new Date(d.toString());
  return date.toISOString().substring(0, 10);
};

export const categoryWithTitleUrl = [
  {
    href: "health_hygiene",
    title: "Health and Hygiene",
    imageurl: "/health.jpg",
  },
  {
    href: "staff",
    title: "Staff",
    imageurl: "/staff.jpg",
  },

  {
    href: "electrical",
    title: "Electrical",
    imageurl: "/electrical.jpg",
  },
  {
    href: "plumbing",
    title: "Plumbing",
    imageurl: "/plumbing.jpeg",
  },
  {
    href: "other",
    title: "Other",
    imageurl: "/others.jpeg",
  },
];

export const toTitleCase = (str) => {
  str = str.split("_").join(" ");
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
