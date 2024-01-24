import { v4 as uuid } from 'uuid';

export const CARS_SEED: ICar[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla'
  },
  {
    id: uuid(),
    brand: 'Mazda',
    model: 'CX-3'
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic'
  },
]