export type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address : AddressType;
    phone: string;
    website: string;
    company: CompanyType;
}

export type AddressType = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeolocationType;
}

export type GeolocationType = {
    lat: string;
    lng: string;
}

export type CompanyType = {
    name: string;
    catchPhrase: string;
    bs: string;
}

export type GetUsersResponse = {
    data?: UserType[];
    error?: string;
}
