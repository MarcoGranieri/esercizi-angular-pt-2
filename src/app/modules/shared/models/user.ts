export enum Roles {
  Staff = 'staff',
  Student = 'student',
  Manager = 'manager',
  Admin = 'admin'
};

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
};

export interface Companies {
  id: number;
  name: string;
  description: string;
  location: Address;
}

export interface Address {
  city: string;
  street: string;
  postalCode: string;
}

export interface Object {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Address;
  role: Roles;
  username: string;
  profilePhotoUrl: string;
  companies: Companies[];
  gender: Gender;
}


