const myDate = ["2023-04-19", "2022-07-16", "2021-07-07", "2022-06-26", "2022-07-21"];
myDate.sort((a, b) => new Date(a) - new Date(b)); 
// Outputs:  ['2021-07-07', '2022-06-26', '2022-07-16', '2022-07-21', '2023-04-19']

myDate.sort((a, b) => new Date(b) - new Date(a)); 
// Outputs:  ['2023-04-19', '2022-07-21', '2022-07-16', '2022-06-26', '2021-07-07']

const blogs = [
  {
    "id": 1,
    "title": "Business Systems Development Analyst",
    "views": 940,
  },
  {
    "id": 2,
    "title": "VP Quality Control",
    "views": 971,
  },
  {
    "id": 3,
    "title": "Statistician III",
    "views": 535,
  },
  {
    "id": 4,
    "title": "Recruiting Manager",
    "views": 771,
  },
  {
    "id": 5,
    "title": "Programmer Analyst I",
    "views": 501,
  }
];
blogs.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
