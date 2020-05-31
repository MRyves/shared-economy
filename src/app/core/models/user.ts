interface City {
    readonly id: number;
    name: string;
    canton: string;
}

export interface User {
    readonly id: number;
    firstName: string;
    lastName: string;
    email: string;
    readonly password: string;
    street: string;
    housenumber: string;
    city: City;
    bio?: string;
}
