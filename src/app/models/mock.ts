export interface IBeer {
  id: number,
  type: "small" | "medium",
  name: string,
  price: number }

export const BEERMENU : IBeer[] = [
  {
    id: 1,
    type: "small",
    name: "Peroni",
    price: 1,
  },
  {
    id: 2,
    type: 'medium',
    name: 'Corona',
    price: 5,
  },
  {
    id: 3,
    type: 'small',
    name: 'Messina',
    price: 2.5,
  },
  {
    id: 4,
    type: 'medium',
    name: 'Becks',
    price: 1,
  },
  {
    id: 5,
    type: 'small',
    name: 'Nastro Azzurro',
    price: 2,
  },
  {
    id: 6,
    type: 'medium',
    name: 'Moretti',
    price: 1.5,
  },
  {
    id: 7,
    type: 'small',
    name: 'Heineken',
    price: 1.5,
  },
  {
    id: 8,
    type: 'medium',
    name: 'Dreer',
    price: 3,
  },
  {
    id: 9,
    type: 'small',
    name: 'Ichnusa',
    price: 3,
  },
  {
    id: 10,
    type: 'medium',
    name: 'Tuborg',
    price: 3,
  }
]



