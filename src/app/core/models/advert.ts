import {User} from './user';
import {AdvertType} from './advertType';
import {Pricing} from './pricing';

export interface Advert {
    readonly id?: number;
    title?: string;
    description?: string;
    creationTimestamp?: string;
    advertType: AdvertType;
    pricing: Pricing;
    user?: User;
}
