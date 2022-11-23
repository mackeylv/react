//Create the Error component
import { Col } from "reactstrap";
//Create a new function component named Error. In its parameter list, destructure a prop named errMsg
const Error = ({ errMsg }) => {
    return (
        <Col>
            <h4>{errMsg}</h4>
        </Col>
    );
};

export default Error;

