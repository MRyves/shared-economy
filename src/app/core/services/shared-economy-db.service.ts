import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class SharedEconomyDb implements InMemoryDbService {

    constructor() {
    }

    /*
        private static createUsers(): User[] {
            return [
                {
                    id: 0,
                    email: 'yves.hendseth@hispeed.ch',
                    email: 'yveshendseth',
                    pwHash: '0a89523a3ee1df80174698bacad5ed73fb04e2c84b4254c34dc94f3f03dd4b96',
                    firstName: 'Yves',
                    lastName: 'Hendseth',
                    bio: 'I am a very honest and reliable user of the SharedEconomy platform. ' +
                        'Providing a top-quality service for my customers is my utmost priority'
                }, {
                    id: 1,
                    email: 'jev@sharedeconomy.ch',
                    email: 'jev',
                    pwHash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', // --> 'password'
                    firstName: 'Jevin',
                    lastName: 'aVeryComplicatedLastName'
                }, {
                    id: 2,
                    email: 'cyrill@sharedeconomy.ch',
                    email: 'cyrill',
                    pwHash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
                    firstName: 'Cyrill',
                    lastName: 'iHaveNoIdea'
                }, {
                    id: 3,
                    email: 'roman@sharedeconomy.ch',
                    email: 'roman',
                    pwHash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
                    firstName: 'Roman',
                    lastName: 'iHaveNoIdea'
                }, {
                    id: 4,
                    email: 'test@gmail.com',
                    email: 'testUser',
                    firstName: 'Tester',
                    lastName: 'Tester',
                    pwHash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'
                }
            ];
        }

        private static createOffers(users: User[]): Advert[] {
            return [{
                id: 0,
                title: 'Rent my Ferrari',
                description: 'You can rent my Ferrari LaFerrai for as long as you want',
                price: 1,
                city: 'Zurich',
                comments: [],
                offeringUserId: users[1].id
            }, {
                id: 1,
                title: 'Rent my Mixer',
                description: 'I am offering my Nutri-Bullet mixer since I dont like smoothies any more, thus i don\'t  need a mixer.',
                price: 999,
                city: 'Zurich',
                comments: ['Very handy right hand, does its work perfectly'],
                offeringUserId: users[0].id
            }, {
                id: 2,
                title: 'Test Advert',
                description: 'This is just a test offer.',
                price: 17,
                city: 'Winterthur',
                comments: [''],
                offeringUserId: users[4].id
            }];
        }
    */
    createDb() {
        /*
        const users = SharedEconomyDb.createUsers();
        const offers = SharedEconomyDb.createOffers(users);
*/
        return {};
    }
}
