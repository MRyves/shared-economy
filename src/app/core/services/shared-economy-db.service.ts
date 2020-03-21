import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {Offer} from '../models/offer';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class SharedEconomyDb implements InMemoryDbService {

    constructor() {
    }

    createDb() {
        const users = this.createUsers();
        const offers = this.createOffers(users);

        return {users, offers};
    }

    private createUsers(): User[] {
        return [
            {
                id: 0,
                email: 'yves.hendseth@hispeed.ch',
                username: 'yveshendseth',
                pwHash: '0a89523a3ee1df80174698bacad5ed73fb04e2c84b4254c34dc94f3f03dd4b96',
                firstName: 'Yves',
                lastName: 'Hendseth'
            }, {
                id: 1,
                email: 'jev@sharedeconomy.ch',
                username: 'longDongJev',
                pwHash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', // --> 'password'
                firstName: 'Jevin',
                lastName: 'aVeryComplicatedLastName'
            }, {
                id: 2,
                email: 'cyrill@sharedeconomy.ch',
                username: 'longDongCyrill',
                pwHash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
                firstName: 'Cyrill',
                lastName: 'iHaveNoIdea'
            }, {
                id: 3,
                email: 'roman@sharedeconomy.ch',
                username: 'longDongRoman',
                pwHash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
                firstName: 'Roman',
                lastName: 'iHaveNoIdea'
            }
        ];
    }

    private createOffers(users: User[]): Offer[] {
        return [{
            id: 0,
            title: 'Rent my Ferrari',
            description: 'You can rent my Ferrari LaFerrai for as long as you want',
            price: 1,
            city: 'Zurich',
            comments: [],
            offeringUser: users[1]
        }];
    }
}
