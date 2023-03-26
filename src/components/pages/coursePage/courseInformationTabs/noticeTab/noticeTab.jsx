import {Button, ListGroup} from "react-bootstrap";
import CreateNoticeModalContainer from "../../../../modals/createNoticeModal/createNoticeModalContainer";


const NoticeTab = (props) => {
    const arrNot = ["Уведомление1", "Уведомление3", "Уведомление3", "Уведомление3", "Уведомление3", "Уведомление3", "Уведомление3"]
    return (
        <div className={"border-bottom border-end border-start border-1 p-3"}>
            <CreateNoticeModalContainer/>
            <Button variant={"outline-primary"} onClick={props.openNoticeModal}>
                Создать уведомление</Button>
            <ListGroup variant="flush" className={"mt-3"} style={{maxHeight:"200px", overflowY: "auto"}}>
                <ListGroup.Item variant={"danger"}>Важное уведомление</ListGroup.Item>
                {
                    arrNot.map((not, i) =>
                        <ListGroup.Item key={i}>{not}</ListGroup.Item>
                    )
                }
            </ListGroup>
        </div>
    );
}

export default NoticeTab;