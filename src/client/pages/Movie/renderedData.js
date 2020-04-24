const renderedData = data => [
  {
    title: 'Status',
    value: data.status,
  },
  {
    title: 'Release Date',
    value: data.release_date,
    isDate: true,
  },
  {
    title: 'Budget',
    value: data.budget,
    isMoney: true,
  },
  {
    title: 'Revenue',
    value: data.revenue,
    isMoney: true,
  },
  {
    title: 'Homepage',
    value: data.homepage,
    isLink: true,
  },
  {
    title: 'Adult content',
    value: data.adult,
    isBoolean: true,
  },
];

export default renderedData;
