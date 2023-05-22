import React from "react";

import style from './Registration.module.css'

import cities from './../../json/cities.json'

import {Field, Formik} from "formik";
import {validationsSchema} from "../validation";

import WrapperInput from "./../WrapperInput/WrapperInput"
import Input from "../Input/Input";
import DataList from "../DataList/DataList";

const Registration = (props) => {

    let dataRedact = new Date()

    let options = {day: 'numeric', month: 'long', year: 'numeric'}
    options.timeZone = 'GMT+3'

    let now = dataRedact.toLocaleString(options)

    return (
        <Formik initialValues={{
            name: '',
            lastName: '',
            city: '',
            password: '',
            repeatPassword: '',
            phone: '',
            email: '',
            agree: false,
            dataRedact: new Date()
        }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
                validateOnBlur
                validationSchema={validationsSchema}
        >
            {({errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, values}) => (
                <div>
                    <div className={style.mainPage}>

                        <WrapperInput
                            leftText="Имя"
                            requiredInput="*">
                            <Input name="name"
                                   type="text"
                                   style={{marginLeft: 174 + 'px'}}
                                   placeholder="Введите имя"
                                   error={touched.name && errors.name}
                                   onChange={handleChange}
                            />
                        </WrapperInput>

                        <WrapperInput
                            leftText="Фамилия"
                            requiredInput="*">
                            <Input name="lastName"
                                   type="text"
                                   style={{marginLeft: 126 + 'px'}}
                                   placeholder="Введите фамилию"
                                   error={touched.lastName && errors.lastName}
                                   onChange={handleChange}
                            />
                        </WrapperInput>

                        <WrapperInput
                            leftText="Ваш город"
                            requiredInput="*">
                            <DataList
                                name="city"
                                error={touched.city && errors.city}
                                placeholder="Выберите ваш город"
                                onChange={handleChange}
                                style={{marginLeft: 112 + 'px'}}
                                defaultValue={cities
                                    .filter((item: any) => item.population > 50000)
                                    .map((item) => item.city)}
                            />
                        </WrapperInput>

                    </div>


                    <div className={style.page}>

                        <WrapperInput leftText="Пароль">
                            <Input name="password"
                                   type="password"
                                   style={{marginLeft: 151 + 'px'}}
                                   placeholder="Введите пароль"
                                   error={touched.password && errors.password}
                                   onChange={handleChange}
                            />
                        </WrapperInput>

                        <WrapperInput
                            leftText="Пароль еще раз"
                            requiredInput="*">
                            <Input name="repeatPassword"
                                   type="password"
                                   style={{marginLeft: 58 + 'px'}}
                                   placeholder="Пароль еще раз"
                                   error={touched.repeatPassword && errors.repeatPassword}
                                   onChange={handleChange}
                            />
                        </WrapperInput>

                    </div>

                    <div className={style.pageSub}>

                        <WrapperInput leftText="Номер телефона">
                            <Input name="phone"
                                   type="tel"
                                   style={{marginLeft: 56 + 'px'}}
                                   placeholder="+7 (***) ***-**-**"
                                   onBlur={handleBlur}
                                   onChange={handleChange}
                                   error={touched.phone && errors.phone}
                            />
                        </WrapperInput>

                        <WrapperInput leftText="Электронная почта">
                            <Input name="email"
                                   type="text"
                                   style={{marginLeft: 36 + 'px'}}
                                   onBlur={handleBlur}
                                   onChange={handleChange}
                                   placeholder="Введите email"
                                   error={touched.email && errors.email}
                            />
                        </WrapperInput>

                        <WrapperInput leftText="Я согласен">
                            <Field
                                name="agree"
                                id="agree"
                                style={{marginLeft: 115 + 'px'}}
                                checked={values.agree}
                                onChange={handleChange}
                                type="checkbox"
                            />
                            <p className={style.info}>принимать актуальную информацию на email</p>
                        </WrapperInput>

                        <div className={style.btnBlock}>
                            <button disabled={!isValid && !dirty} onClick={handleSubmit}
                                    className={style.btn}>Изменить
                            </button>
                            <p className={style.now}>последнее изменение {now}</p>
                        </div>

                    </div>

                </div>
            )}
        </Formik>
    )
}

export default Registration