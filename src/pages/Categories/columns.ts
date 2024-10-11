export const columns = [
  {
    labelKey: 'users:name',
    sortKey: 'name',
    isSortable: true,
    minWidth: '400px',
  },
  {
    labelKey: 'users:dateOfCreation',
    sortKey: 'createdAt',
    isSortable: true,
    minWidth: '250px',
  },

  {
    labelKey: '',
    sortKey: 'role',
    isSortable: false,
    minWidth: '99px',
  },
];
