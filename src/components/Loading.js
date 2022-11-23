//Create the Loading component
import { Col } from "reactstrap";
//Create a new function component named Loading with no parameters
const Loading = () => {
    //In the Loading component's body, write a return statement and in it, render a Col component
    return (
        <Col>
            <i className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary' />
            <p>Loading...</p>
        </Col>
    );
};

export default Loading;
