export class Hair {
    color: string | null = null;
    type: string | null = null;
}

export class Coordinates {
    lat: number | null = null;
    lng: number | null = null;
}

export class Address {
    address: string | null = null;
    city: string | null = null;
    coordinates: Coordinates = new Coordinates;
    postalCode: string | null = null;
    state: string | null = null;
}

export class Bank {
    cardExpire: string | null = null;
    cardNumber: string | null = null;
    cardType: string | null = null;
    currency: string | null = null;
    iban: string | null = null;
}

export class Company {
    address: Address = new Address;
    department: string | null = null;
    name: string | null = null;
    title: string | null = null;
}

export class User {
    id: number | null = null;
    firstName: string | null = null;
    lastName: string | null = null;
    maidenName: string | null = null;
    age: number | null = null;
    gender: string | null = null;
    email: string | null = null;
    phone: string | null = null;
    username: string | null = null;
    password: string | null = null;
    birthDate: string | null = null;
    image: string | null = null;
    bloodGroup: string | null = null;
    height: number | null = null;
    weight: number | null = null;
    eyeColor: string | null = null;
    hair: Hair = new Hair;
    domain: string | null = null;
    ip: string | null = null;
    address: Address = new Address;
    macAddress: string | null = null;
    university: string | null = null;
    bank: Bank = new Bank;
    company: Company = new Company;
    ein: string | null = null;
    ssn: string | null = null;
    userAgent: string | null = null;
}

export class UserList {
    users: User[] = [];
    total: number | null = null;
    skip: number | null = null;
    limit: number | null = null;
}

