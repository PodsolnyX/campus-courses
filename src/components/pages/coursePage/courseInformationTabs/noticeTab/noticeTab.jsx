import {Button, ListGroup} from "react-bootstrap";
import CreateNoticeModalContainer from "../../modals/createNoticeModal/createNoticeModalContainer";
import {isAdmin, isCourseTeacher} from "../../../../../helpers/roleDeterminant";


const NoticeTab = (props) => {

    const isCanEdit = isAdmin(props.userRoles) || isCourseTeacher(props.userEmail, props.course.teachers);

    return (
        <div className={"border-bottom border-end border-start border-1 p-3"}>
            { isCanEdit ?
                <div>
                    <CreateNoticeModalContainer/>
                    <Button variant={"outline-primary"} onClick={props.openNoticeModal}>
                        Создать уведомление</Button>
                </div> : undefined
            }
            <ListGroup variant="flush" className={"mt-3"} style={{maxHeight:"200px", overflowY: "auto"}}>
                {
                    props.course.notifications?.length === 0 ?
                        <div className={"text-secondary mx-auto mb-3"}>Уведомлений нет</div>
                        : props.course.notifications?.map((not, i) =>
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