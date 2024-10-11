export const columns = [
  {
    labelKey: 'users:name',
    sortKey: 'name',
    isSortable: true,
    minWidth: '290px',
  },
  {
    labelKey: 'users:dateOfCreation',
    sortKey: 'createdAt',
    isSortable: true,
    minWidth: '200px',
  },
  {
    labelKey: 'users:weddingDate',
    sortKey: 'weddingDate',
    isSortable: false,
    minWidth: '200px',
  },
  {
    labelKey: 'users:country',
    sortKey: 'country',
    isSortable: false,
    minWidth: '170px',
  },
  {
    labelKey: 'users:role',
    sortKey: 'role',
    isSortable: true,
    minWidth: '200px',
  },
  {
    labelKey: '',
    sortKey: 'role',
    isSortable: false,
    minWidth: '99px',
  },
];
