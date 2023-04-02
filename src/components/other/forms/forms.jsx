import Select from "react-select";
import {Form} from "react-bootstrap";

export const FormFIO = (props) => {
    return (
        <div>
            <input {...props.register("name", {
                required: "Обязательное поле",
                pattern: {
                    value: /^([А-ЯA-Z][а-яa-zА-ЯA-Z\-]+\s?){2,}\s*$/,
                    message: "Неправильный формат ФИО"
                }
            })}
                   className={`form-control ${props.errors?.name?.message ? "border-danger" : undefined}`}
                   onChange={props.onChange} placeholder={"Иванов Иван Иванович"} type="text"
                   id="inputName" name="name" disabled={props.disabled}/>
            <div className={"text-danger"}>{props.errors?.name?.message}</div>
        </div>
    );
}

export const FormEmail = (props) => {
    return (
        <div>
            <input {...props.register("email", {
                required: "Обязательное поле",
                pattern: {
                    value: /^[a-zA-Z1-9\-\._]+@[a-z1-9]+(.[a-z1-9]+){1,}$/,
                    message: "Неправильный формат email-адреса"
                }
            })}
                   className={`form-control ${props.errors?.email?.message ? "border-danger" : undefined}`}
                   onChange={props.onChange} type="email"
                   placeholder="name@example.com" id="inputEmail" name="email"
                   aria-describedby="email" disabled={props.disabled}/>
            <div className={"text-danger"}>{props.errors?.email?.message}</div>
        </div>
    );
}

export const FormBirthDay = (props) => {
    return (
        <div>
            <input {...props.register("birthDate", {
                required: "Обязательное поле",
                max: {
                    value: new Date().toISOString().slice(0, 10),
                    message: "Вы физически не могли родиться"
                },
                min: {
                    value: "1923-01-01",
                    message: "Вы слишком стары для этого"
                }
            })}
                   className={`form-control ${props.errors?.birthDate?.message ? "border-danger" : undefined}`}
                   id="inputBirthDate" name="birthDate"
                   onChange={props.onChange} type="date" disabled={props.disabled}
                   max={new Date().toISOString().slice(0, 10)}/>
            <div className={"text-danger"}>{props.errors?.birthDate?.message}</div>
        </div>
    );
}

export const FormPassword = (props) => {
    return (
        <div>
            <input {...props.register("password", {
                required: "Обязательное поле",
                minLength: {
                    value: 6,
                    message: "Длина пароля должна быть более 6 символов"
                },
                maxLength: {
                    value: 32,
                    message: "Пароль слишком длинный, Вы перестарались"
                },
                pattern: {
                    value: /\d/,
                    message: "Пароль должен содержать хотя бы одну цифру"
                }
            })}
                   className={`form-control ${props.errors?.password?.message ? "border-danger" : undefined}`}
                   onChange={props.onChange} type="password" disabled={props.disabled}
                   id="inputPassword" name="password"/>
            <div className={"text-danger"}>{props.errors?.password?.message}</div>
        </div>
    );
}

export const FormPasswordConfirm = (props) => {
    return (
        <div>
            <input {...props.register("passwordConfirmation", {
                required: "Обязательное поле",
                validate: (val) => {
                    if (props.watch("password") !== val) {
                        return "Пароли не совпадают";
                    }
                }
            })}
                   className={`form-control ${props.errors?.passwordConfirmation?.message ? "border-danger" : undefined}`}
                   onChange={props.onChange} type="password" disabled={props.disabled}
                   id="inputPasswordConfirmation"
                   name="passwordConfirmation"/>
            <div className={"text-danger"}>{props.errors?.passwordConfirmation?.message}</div>
        </div>
    );
}

export const FormGroupName = (props) => {
    return (
        <div>
            <input {...props.register("groupName", {
                required: "Обязательное поле",
            })}
                   className={`form-control ${props.errors?.groupName?.message ? "border-danger" : undefined}`}
                   onChange={props.onChange} type="text" id={"inputGroupName"}
                   name="groupName" disabled={props.disabled}/>
            <div className={"text-danger"}>{props.errors?.groupName?.message}</div>
        </div>
    );
}

export const FormStartYear = (props) => {
    return (
        <div>
            <input {...props.register("startYear", {
                required: "Обязательное поле",
                max: {
                    value: 2029,
                    message: "Максимальный год - 2029"
                },
                min: {
                    value: 2000,
                    message: "Минимальный год - 2000"
                },
                pattern: {
                    value: /^\d+\s*$/,
                    message: "Неправильный формат"
                }
            })}
                   className={`form-control ${props.errors?.startYear?.message ? "border-danger" : undefined}`}
                   onChange={props.onChange} type="text" id={"inputStartYear"}
                   name="startYear" disabled={props.disabled}/>
            <div className={"text-danger"}>{props.errors?.startYear?.message}</div>
        </div>
    );
}

export const FormMaxStudentsCount = (props) => {
    return (
        <div>
            <input {...props.register("maxStudentsCount", {
                required: "Обязательное поле",
                max: {
                    value: 200,
                    message: "Максимальное кол-во студентов - 200"
                },
                min: {
                    value: 1,
                    message: "Минимальное кол-во студентов - 1"
                },
                pattern: {
                    value: /^\d+\s*$/,
                    message: "Неправильный формат"
                }
            })}
                   className={`form-control ${props.errors?.maxStudentsCount?.message ? "border-danger" : undefined}`}
                   onChange={props.onChange} type="text" id={"inputMaxStudentsCount"}
                   name="maxStudentsCount" disabled={props.disabled}/>
            <div className={"text-danger"}>{props.errors?.maxStudentsCount?.message}</div>
        </div>
    );
}

export const FormSemester = (props) => {
    return (
        <div>
            <Form.Check
                type={"radio"}
                label={"Осенний"}
                id={"AutumnCheck"}
                name="semester"
                value={"Autumn"}
                checked={props.semester === "Autumn"}
                onChange={props.onChange}
                inline
            />

            <Form.Check
                type={"radio"}
                label={"Весенний"}
                id={"springCheck"}
                name="semester"
                value={"Spring"}
                checked={props.semester === "Spring"}
                onChange={props.onChange}
                inline
            />
        </div>
    );
}

export const FormCourseStatus = (props) => {

    return (
        <div>
            { props.curStatus !== "OpenForAssigning" && props.curStatus !== "Started" && props.curStatus !== "Finished" ?
                <Form.Check
                type={"radio"}
                label={"Открыт для записи"}
                id={"OpenForAssigningCheck"}
                name="status"
                value={"OpenForAssigning"}
                checked={props.status === "OpenForAssigning"}
                onChange={props.onChange}
                inline
                /> : undefined
            }
            { props.curStatus !== "Started" && props.curStatus !== "Finished" ?
                <Form.Check
                    type={"radio"}
                    label={"В процессе"}
                    id={"StartedCheck"}
                    name="status"
                    value={"Started"}
                    checked={props.status === "Started"}
                    onChange={props.onChange}
                    inline
                /> : undefined
            }
            <Form.Check
                type={"radio"}
                label={"Завершен"}
                id={"FinishedCheck"}
                name="status"
                value={"Finished"}
                checked={props.status === "Finished"}
                onChange={props.onChange}
                inline
            />
        </div>
    );
}

export const FormMainTeacher = (props) => {
    return (
        <div>
            <Select
                options={props.options}
                defaultValue={props.defaultValue}
                name="mainTeacherId"
                onChange={props.onChange}
            />
        </div>
    );
}

export const FormNoticeText = (props) => {
    return (
        <Form.Control as="textarea" rows={5} value={props.text}
                      onChange={props.onChange} name={"text"}/>
    );
}

export const FormIsImportantNotice = (props) => {
    return (
        <div className="form-check form-switch my-auto">
            <input className="form-check-input" type="checkbox"
                   id="isImportantCheck" checked={props.isImportant}
                   name={"isImportant"}
                   onChange={props.onChange}
            />
            <label className="form-label">Важное уведомление</label>
        </div>
    );
}




