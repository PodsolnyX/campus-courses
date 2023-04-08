import {Button, Card, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const ListGroupItem = (props) => {

    const onDeleteGroup = () => {
        props.openConfirmPopup(() => {
            props.deleteGroup(props.data)
        })
    }

    return (
      <Card className={"my-2 card-list"}>
          <Card.Body className={"row"}>
              <Link to={`/groups/${props.data.id}`} className={"col my-1"} >
                  <div>{props.data.name}</div>
              </Link>
              {
                  props.isAdmin ?
                      <div className={"col d-flex justify-content-end"}>
                          <Button variant={"outline-warning"} className={"me-2"}
                                  onClick={() => props.openGroupsModal(props.data, true)}>
                              Изменить
                          </Button>
                          <Button variant={"outline-danger"} onClick={onDeleteGroup}>
                              Удалить
                          </Button>
                      </div>
                      :
                      undefined
              }
          </Card.Body>
      </Card>
    );
}

export default ListGroupItem;