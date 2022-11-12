//PartnersList.js
import { Col } from "reactstrap";
import { PARTNERS } from "../../app/shared/PARTNERS"
//Also import the Partner component, as well as the selectAllPartners function from their respective paths.
import Partner from "../partners/Partner"
import { selectAllPartners } from "./partnersSlice"

const PartnersList = () => {
    const partners = selectAllPartners();

    return (
        <Col className="mt-4" >
            {partners.map((partner) => {
                return (
                    <div className='d-flex mb-5' key={partner.id} >
                        <Partner partner={partner}/>
                    </div>
                );
            })}
        </Col>
    );
};


export default PartnersList;