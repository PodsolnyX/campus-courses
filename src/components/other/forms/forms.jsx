export const FormFIO = (props) => {
    return (
        <div>
            <label htmlFor="" className="form-label">ФИО</label>
            <input {...props.register("name", {
                required: "Обязательное поле",
                pattern: {
                    value: /^([А-ЯA-Z][а-яa-zА-ЯA-Z\-]+\s?){2,}\s*$/,
                    message: "Неправильный формат ФИО"
                }
            })}
                   className={`form-control ${props.errors?.name?.message ? "border-danger" : undefined}`}
                   onChange={props.onChange} placeholder={"Иванов Иван Иванович"} type="text"
                   id="inputName" name="name"/>
            <div className={"text-danger"}>{props.errors?.name?.message}</div>
        </div>
    );
}

export const FormEmail = (props) => {
    return (
        <div>
            <label htmlFor="" className="form-label">Email</label>
            <input {...props.register("email", {
                required: "Обязательное поле",
                pattern: {
                    value: /^[a-zA-Z1-9\-\._]+@[a-z1-9]+(.[a-z1-9]+){1,}$/,
                    message: "Неправильный формат email-адреса"
                }
            })}
                   className={`form-control ${ props.errors?.email?.message ? "border-danger" : undefined}`}
                   onChange={props.onChange} type="email"
                   placeholder="name@example.com" id="inputEmail" name="email"
                   aria-describedby="email"/>
            <div className={"text-danger"}>{props.errors?.email?.message}</div>
        </div>
    );
}

export const FormBirthDay = (props) => {
    return (
        <div>
            <label htmlFor="" className="form-label">Дата рождения</label>
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
                   className={`form-control ${ props.errors?.birthDate?.message ? "border-danger" : undefined}`}
                   id="inputBirthDate" name="birthDate"
                   onChange={props.onChange} type="date"
                   max={new Date().toISOString().slice(0, 10)} />
            <div className={"text-danger"}>{props.errors?.birthDate?.message}</div>
        </div>
    );
}

export const FormPassword = (props) => {
    return (
        <div>
            <label htmlFor="" className="form-label">Пароль</label>
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
                   className={`form-control ${ props.errors?.password?.message ? "border-danger" : undefined}`}
                   onChange={props.onChange} type="password"
                   id="inputPassword" name="password"/>
            <div className={"text-danger"}>{props.errors?.password?.message}</div>
        </div>
    );
}

export const FormPasswordConfirm = (props) => {
    return (
        <div>
            <label htmlFor="" className="form-label">Подтверждение пароля</label>
            <input {...props.register("passwordConfirmation", {
                required: "Обязательное поле",
                validate: (val) => {
                    if (props.watch("password") !== val) {
                        return "Пароли не совпадают";
                    }
                }
            })}
                   className={`form-control ${ props.errors?.passwordConfirmation?.message ? "border-danger" : undefined}`}
                   onChange={props.onChange} type="password"
                   id="inputPasswordConfirmation"
                   name="passwordConfirmation"/>
            <div className={"text-danger"}>{props.errors?.passwordConfirmation?.message}</div>
        </div>
    );
}




