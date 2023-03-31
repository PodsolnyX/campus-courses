import {Button, Card, Container, ListGroup, Spinner} from "react-bootstrap";
import ListGroupItemContainer from "./listGroupItem/listGroupItemContainer";
import EditGroupsModalContainer from "./modals/editGroupModal/editGroupModalContainer";
import {useEffect} from "react";
import LoadSpinner from "../../other/loadSpinner/loadSpinner";

const GroupsPage = (props) => {

    const isEdit = (props.userRoles["isAdmin"] === true);

    useEffect(() => {
        props.getGroups();
    }, []);

    return (
        <div>
            <EditGroupsModalContainer/>
            <Container className={"col"}>
                <div className="col-12 col-lg-8 mx-auto mt-5">
                    <div className={"d-flex justify-content-between"}>
                        <h3>Группы кампусных курсов</h3>
                        {
                            isEdit ?
                                <Button variant={"outline-primary"}
                                        onClick={() => props.openGroupsModal({name: ""}, false)}
                                >Создать группу</Button>
                                : undefined
                        }
                    </div>

                    <Card className={"mt-4"}>
                        {
                            props.isLoading ?
                                <LoadSpinner/>
                                :
                                <ListGroup variant="flush">
                                    {
                                        props.groups.map((group) =>
                                            <ListGroupItemContainer data={group} isEdit={isEdit} key={group.id}/>)
                                    }
                                </ListGroup>
                        }
                    </Card>
                </div>
            </Container>
        </div>
    );
}

export default GroupsPage;