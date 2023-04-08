import {Button, Card, Container, ListGroup} from "react-bootstrap";
import ListGroupItemContainer from "./listGroupItem/listGroupItemContainer";
import EditGroupsModalContainer from "./modals/editGroupModal/editGroupModalContainer";
import {useEffect} from "react";
import LoadSpinner from "../../other/loadSpinner/loadSpinner";
import {isAdmin} from "../../../helpers/roleDeterminant";

const GroupsPage = (props) => {

    useEffect(() => {
        props.getGroups();
    }, []);

    return (
        <div>
            {isAdmin(props.userRoles) ? <EditGroupsModalContainer/> : undefined}
            <Container className={"col"}>
                <div className="col-12 col-lg-8 mx-auto mt-5">
                    <div className={"d-flex justify-content-between"}>
                        <h3>Группы кампусных курсов</h3>
                        {
                            isAdmin(props.userRoles) ?
                                <Button variant={"outline-primary"}
                                        onClick={() => props.openGroupsModal({name: ""}, false)}
                                >Создать группу</Button>
                                : undefined
                        }
                    </div>

                    <div className={"mt-4"}>
                        {
                            props.isLoading ?
                                <LoadSpinner/>
                                :
                                <div >
                                    {
                                        props.groups.map((group) =>
                                            <ListGroupItemContainer data={group} isAdmin={isAdmin(props.userRoles)}
                                                                    key={group.id}/>)
                                    }
                                </div>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default GroupsPage;