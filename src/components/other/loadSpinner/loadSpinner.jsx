import {Spinner} from "react-bootstrap";

const LoadSpinner = (props) => {

    const marginX = props.marginX ? props.marginX : 5;

    return (
        <div className={`d-flex mt-${marginX} mb-${marginX}`}>
            <Spinner className={"mx-auto"} animation="border"/>
        </div>
    );
}

export default LoadSpinner;