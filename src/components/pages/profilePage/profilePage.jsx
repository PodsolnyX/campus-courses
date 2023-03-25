import {Button, Card, Container} from "react-bootstrap";
import {useState} from "react";

const ProfilePage = () => {

    const [isEdit, setIsEdit] = useState(false);

    const onStartEdit = () => {
        setIsEdit(true);
    }

    const onEdit = () => {
        setIsEdit(false);
    }

    return (
        <Container className={"col"}>
            <Card className="col-12 col-md-10 col-lg-8 mx-auto mt-5">
                <Card.Body>
                    <h4 className={"text-center"}>Профиль</h4>
                    <div className={"mt-5 ms-3 me-3"}>
                        <div className="row">
                            <label htmlFor="" className="col-4 form-label">ФИО</label>
                            <input type="text" className="col form-control"
                                   id="inputName" name="name"/>
                        </div>
                        <div className={"row mt-3"}>
                            <label htmlFor="" className="col-4 form-label">Email</label>
                            <label className="col">user@mail.ru</label>
                        </div>
                        <div className="row mt-3">
                            <label htmlFor="" className="col-4 form-label">Дата рождения</label>
                            <input type="date" className="col form-control"
                                   id="inputBirthDate" name="birthDate"/>
                        </div>
                        <div className="mt-3 d-flex justify-content-end">
                            {
                                isEdit ?
                                    <Button variant={"outline-primary"} onClick={onEdit} id="btn-edit">Сохранить</Button>
                                    :
                                    <Button variant={"warning"} onClick={onStartEdit} id="btn-edit">Изменить</Button>
                            }
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ProfilePage;