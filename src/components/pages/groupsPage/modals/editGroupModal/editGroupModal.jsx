import {Button, Modal} from "react-bootstrap";
import LoadSpinner from "../../../../other/loadSpinner/loadSpinner";
import {useForm} from "react-hook-form";
import {FormGroupName} from "../../../../other/forms/forms";
import {useEffect} from "react";

const EditGroupModal = (props) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: "onBlur"
    });

    useEffect(() => {
        if (props.currentGroup) {
            reset({
                groupName: props.currentGroup.name,
            });
        }
    }, [props.currentGroup]);

    const onChange = (e) => {
        props.editNameGroupsModal(e.target.value);
    }

    const onClickSave = () => {
        props.isEdit ? props.editGroup() : props.createGroup();
    }

    return (
        <Modal
            show={props.isShowModal}
            onHide={props.closeGroupsModal}
            keyboard={true}
            centered
        >
            <form onSubmit={handleSubmit(onClickSave)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {
                            props.isEdit ? "Редактирование группы" : "Создание группы"
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        props.isLoading ? <LoadSpinner marginX={3}/> :
                            <div>
                                <label htmlFor="" className="form-label">Название группы</label>
                                <FormGroupName register={register} errors={errors} onChange={onChange}/>
                            </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeGroupsModal}>Отмена</Button>
                    <Button variant="primary" disabled={props.isLoading} type={"submit"}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}

export default EditGroupModal;