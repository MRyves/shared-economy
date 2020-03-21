import {User} from './user';

export interface Offer {
    readonly id: number;
    title: string;
    description: string;
    price: number;
    city?: string;
    offeringUser: User;
    comments: string[];
}
