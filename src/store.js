let store = {
    _state: {
        usernamePage: {
            username: [
                {
                    id: 1,
                    name: 'Name1'
                },
            ],
            newNameText: 'Введите свое имя'
        },

        mainPage: {
            newMiddleNameText: 'Введите фамилию',
        },

        passwordPage: {
            newPassword: 'Введите пароль',
            repeatPassword: 'Повторите пароль'
        },

        personalPage: {
            newPhone: '+7 (***) ***-**-**',
            newMail: 'Введите email'
        }
    },

}

export default store