import {Button, Form, Modal} from "react-bootstrap";
import HtmlEditor from "../../other/htmlEditor/htmlEditor";
import Select from "react-select";

const EditCourseModal = (props) => {

    const options = [
        { value: '1', label: 'Иванов' },
        { value: '2', label: 'Сидоров' },
        { value: '3', label: 'Арышев' }
    ]

    return (
        <Modal
            show={props.isShow}
            onHide={props.closeCourseModal}
            keyboard={true}
            centered
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {
                        props.isEdit ? "Редактирование курса" : "Создание курса"
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="">
                        <label htmlFor="" className="form-label">Название курса</label>
                        <input type="text" className="form-control"
                               id="inputName" name="name"/>
                    </div>
                    <div className="pt-2 row">
                        <div className={"col-12 col-md-6"}>
                            <label htmlFor="" className="form-label">Год начала курса</label>
                            <input type="text" className="form-control"
                                   id="inputYear" name="year" maxLength={4}/>
                        </div>
                        <div className={"col-12 col-md-6 pt-2 pt-md-0"}>
                            <label htmlFor="" className="form-label">Общее количество мест</label>
                            <input type="text" className="form-control"
                                   id="inputCount" name="count" maxLength={4}/>
                        </div>
                    </div>
                    <div className="pt-2">
                        <label htmlFor="" className="form-label">Семестр</label>
                        <Form>
                            <Form.Check
                                type={"radio"}
                                label={"Осенний"}
                                id={"3"}
                                name="group1"
                                inline
                            />

                            <Form.Check
                                type={"radio"}
                                label={"Весенний"}
                                id={"4"}
                                name="group1"
                                inline
                            />
                        </Form>
                    </div>
                    <div className="pt-2">
                        <label htmlFor="" className="form-label">Требования</label>
                        <HtmlEditor/>
                    </div>
                    <div className="pt-2">
                        <label htmlFor="" className="form-label">Аннотация</label>
                        <HtmlEditor/>
                    </div>
                    <div className="pt-2">
                        <label htmlFor="" className="form-label">Основной преподаватель курса</label>
                        <Select options={options}/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeCourseModal}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditCourseModal;