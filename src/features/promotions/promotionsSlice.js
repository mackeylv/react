//Create a new selector in promotionsSlice.js
import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);
};