const listColumns = {
  keyField: 'id',
  rowClickTo: id => `/${id}`,
  columns: [
    {
      header: 'Title',
      fieldName: 'title',
      width: '200px'
    },
    {
      header: 'Description',
      fieldName: 'overview',
      width: '700px'
    },
    {
      header: 'Vote average',
      fieldName: 'vote_average',
      width: '100px',
      alignment: 'right'
    }
  ]
};

export default listColumns;
