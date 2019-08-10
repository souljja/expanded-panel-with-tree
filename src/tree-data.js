export const data = [
  {
    id: 0,
    name: "first",
    hasChildren: true,
    isOpen: true,
    children: [
      {
        id: 3,
        name: "fourth",
        hasChildren: true,
        isOpen: true,
        children: [
          {
            id: 4,
            name: "fifth",
            hasChildren: false
          },
          {
            id: 5,
            name: "sixth",
            hasChildren: true,
            isOpen: true,
            children: [
              {
                id: 6,
                name: "seventh seventh seventh seventh",
                hasChildren: false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 1,
    name: "second",
    hasChildren: false
  },
  {
    id: 2,
    name: "third",
    hasChildren: true
  },
  {
    id: 10,
    name: "second",
    hasChildren: false
  },
  {
    id: 11,
    name: "third",
    hasChildren: true
  },
  {
    id: 12,
    name: "second",
    hasChildren: false
  },
  {
    id: 13,
    name: "third",
    hasChildren: true
  }
];
