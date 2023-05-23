import * as yup from "yup";

export const validationsSchema = yup.object().shape({
    name: yup
        .string()
        .required("Это поле должно быть заполнено"),
    lastName: yup
        .string()
        .required("Это поле должно быть заполнено"),
    city: yup
        .string()
        .required("Это поле должно быть заполнено"),
    password: yup
        .string()
        .matches(
            /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gm,
            "Пароль не надежен"
        )
        .min(5, "Используйте не менее 5 символов")
        .required("Укажите пароль"),
    repeatPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Пароли не совпадают")
        .required("Это поле должно быть заполнено"),
    phone: yup
        .string()
        .matches(
            /^^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7}$/gm,
            "Введите корректные данные"
        ),
    agree: yup.boolean(),
    email: yup
        .string()
        .email("Введите верный email")
        .matches(
            /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/gm,
            "Введите корректные данные"
        )
        .when('agree', {
            is: true,
            then: yup
                .string()
                .required('Email должен быть заполнен')
                .email("Введите верный email")
                .matches(
                    /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/gm,
                    "Введите корректные данные"
                ),
        })
});

