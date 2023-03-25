import {Button, Card, Container, ListGroup} from "react-bootstrap";
import ListGroupItemContainer from "./listGroupItem/listGroupItemContainer";
import EditGroupsModalContainer from "../../modals/editGroupModal/editGroupModalContainer";

const GroupsPage = (props) => {

    const isEdit = true;

    const arrGroups = ["Гуманитарные науки, филология", "Естественные науки", "Психология"];

    return (
        <div>
            <EditGroupsModalContainer/>
            <Container className={"col"}>
                <div className="col-12 col-lg-8 mx-auto mt-5">
                    <div className={"d-flex justify-content-between"}>
                        <h3>Группы кампусных курсов</h3>
                        {
                            isEdit ?
                                <Button variant={"outline-primary"} onClick={() => props.openGroupsModal("", false)}
                                >Создать группу</Button>
                                : undefined
                        }
                    </div>

                    <Card className={"mt-4"}>
                        <ListGroup variant="flush">
                            {
                                arrGroups.map((group, i) =>
                                    <ListGroupItemContainer title={group} isEdit={isEdit} key={i}/>)
                            }
                        </ListGroup>
                    </Card>
                </div>
            </Container>
        </div>
    );
}

export default GroupsPage;