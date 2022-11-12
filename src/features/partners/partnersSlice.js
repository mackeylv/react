//Task 3: Select and display the featured partner
import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllPartners = () => {
    return PARTNERS;
};

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
}

