import {Spinner} from "react-bootstrap";

const LoadSpinner = () => {
    return (
        <div className={"d-flex mt-5 mb-5"}>
            <Spinner className={"mx-auto"} animation="border"/>
        </div>
    );
}

export default LoadSpinner;