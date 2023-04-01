import {Button, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const ListGroupItem = (props) => {


    return (
      <ListGroup.Item>
          <div className={"row"}>
              <div className={"col my-2"} >
                  <Link to={`/groups/${props.data.id}`}>{props.data.name}</Link>
              </div>
              {
                  props.isAdmin ?
                      <div className={"col d-flex justify-content-end"}>
                          <Button variant={"outline-warning"} className={"me-2"}
                                  onClick={() => props.openGroupsModal(props.data, true)}>
                              Изменить
                          </Button>
                          <Button variant={"outline-danger"} onClick={() => props.openDeletePopup(props.data)}>
                              Удалить
                          </Button>
                      </div>
                      :
                      undefined
              }
          </div>
      </ListGroup.Item>
    );
}

export default ListGroupItem;