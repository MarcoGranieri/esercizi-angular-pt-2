import { Roles, Gender, IUser } from './user'

export const USERS: IUser[] = [
  {
  id: 3487,
  name: 'Mario',
  surname: 'Rossi',
  age: 25,
  dateOfBirth: '1995-14-12',
  address: {
    city: 'Roma',
    street: 'Via roma 10',
    postalCode: '00100'
  },
  role: Roles.Staff,
  username: 'MarioRossi80',
  profilePhotoUrl: 'https://bit.ly/3yRngEP',
  gender: Gender.Male
},
{
  id: 12312,
  name: 'Maria',
  surname: 'Rossa',
  age: 26,
  dateOfBirth: '1994-10-11',
  address: {
    city: 'Palermo',
    street: 'Via Palermo 10',
    postalCode: '90100'
  },
  role: Roles.Manager,
  username: 'MariaRossa94',
  profilePhotoUrl: 'https://bit.ly/3DWWxuj',
  gender: Gender.Female
},
{
  id: 45645,
  name: 'Elis',
  surname: 'Miao',
  age: 5,
  dateOfBirth: '2016-05-08',
  address: {
    city: 'Palermo',
    street: 'Via Palermo 120',
    postalCode: '90100'
  },
  role: Roles.Admin,
  username: 'ElisMiao',
  profilePhotoUrl: 'https://bit.ly/3zU6iH3',
  gender: Gender.Female
}]
