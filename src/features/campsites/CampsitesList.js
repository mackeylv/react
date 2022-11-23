//Task 2: Create and render the CampsitesList component
//import React from 'react';
import CampsiteCard from "./CampsiteCard";
import { Col, Row } from "reactstrap";
import { selectAllCampsites } from './campsitesSlice';
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";


const CampsitesList = ({ setCampsiteId }) => {
    const campsites = useSelector(selectAllCampsites);

    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    return (
            <Row className='ms-auto'>
                {campsites.map((campsite) => {
                    return (
                        <Col 
                            md='5' 
                            className='m-4' 
                            key={campsite.id}
                        >
                            <CampsiteCard campsite={campsite} />
                        </Col>
                    );
                })}
            </Row>
    );
};


export default CampsitesList;