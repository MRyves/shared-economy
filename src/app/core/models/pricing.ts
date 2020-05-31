import {Currency} from './currency';
import {PricingType} from './pricingType';

export interface Pricing {
    readonly id?: number;
    price?: number;
    pricingType: PricingType;
    currency: Currency;
}
