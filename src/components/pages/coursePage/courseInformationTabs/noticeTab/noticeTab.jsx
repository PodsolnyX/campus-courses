import {Button, ListGroup} from "react-bootstrap";
import CreateNoticeModalContainer from "../../modals/createNoticeModal/createNoticeModalContainer";


const NoticeTab = (props) => {

    return (
        <div className={"border-bottom border-end border-start border-1 p-3"}>
            { props.userRoles["isAdmin"] === true ?
                <div>
                    <CreateNoticeModalContainer/>
                    <Button variant={"outline-primary"} onClick={props.openNoticeModal}>
                        Создать уведомление</Button>
                </div> : undefined
            }
            <ListGroup variant="flush" className={"mt-3"} style={{maxHeight:"200px", overflowY: "auto"}}>
                {
                    props.notifications?.length === 0 ?
                        <div className={"text-secondary mx-auto mb-3"}>Уведомлений нет</div>
                        : props.notifications?.map((not, i) =>
                            <ListGroup.Item variant={not.isImportant ? "danger" : undefined} key={i}>
                                {not.text}
                            </ListGroup.Item>
                        )
                }
            </ListGroup>
        </div>
    );
}

export default NoticeTab;