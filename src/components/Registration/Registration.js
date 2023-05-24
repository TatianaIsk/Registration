import React, {useState} from "react";

import style from './Registration.module.css'

import cities from './../../json/cities.json'

import {Field, Formik} from "formik";
import {validationsSchema} from "../validation";

import WrapperInput from "./../WrapperInput/WrapperInput"
import Input from "../Input/Input";
import DataList from "../DataList/DataList";
import getDate from "../../getDate";

const Registration = () => {

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
                            requiredInput="*"
                            htmlFor="name">
                            <Input name="name"
                                   type="text"
                                   id="name"
                                   style={{marginLeft: 174 + 'px'}}
                                   placeholder="Введите имя"
                                   error={touched.name && errors.name}
                                   onChange={handleChange}
                                   value={values.name}
                            />
                        </WrapperInput>

                        <WrapperInput
                            leftText="Фамилия"
                            requiredInput="*"
                            htmlFor="lastName">
                            <Input name="lastName"
                                   type="text"
                                   id="lastName"
                                   style={{marginLeft: 126 + 'px'}}
                                   placeholder="Введите фамилию"
                                   error={touched.lastName && errors.lastName}
                                   onChange={handleChange}
                                   value={values.lastName}
                            />
                        </WrapperInput>

                        <WrapperInput
                            leftText="Ваш город"
                            requiredInput="*"
                            htmlFor="city">
                            <DataList
                                name="city"
                                error={touched.city && errors.city}
                                id="city"
                                placeholder="Выберите ваш город"
                                onChange={handleChange}
                                style={{marginLeft: 112 + 'px'}}
                                defaultValue={cities
                                    .filter((item: any) => item.population > 50000)
                                    .map((item) => item.city)}
                                value={values.city}
                            />
                        </WrapperInput>

                    </div>


                    <div className={style.page}>

                        <WrapperInput
                            leftText="Пароль"
                            htmlFor="password">
                            <Input name="password"
                                   type="password"
                                   id="password"
                                   style={{marginLeft: 151 + 'px'}}
                                   placeholder="Введите пароль"
                                   error={touched.password && errors.password}
                                   onChange={handleChange}
                                   value={values.password}
                            />
                        </WrapperInput>

                        <WrapperInput
                            leftText="Пароль еще раз"
                            requiredInput="*"
                            htmlFor="repeatPassword">
                            <Input name="repeatPassword"
                                   type="password"
                                   id="repeatPassword"
                                   style={{marginLeft: 58 + 'px'}}
                                   placeholder="Пароль еще раз"
                                   error={touched.repeatPassword && errors.repeatPassword}
                                   onChange={handleChange}
                                   value={values.repeatPassword}
                            />
                        </WrapperInput>

                    </div>

                    <div className={style.pageSub}>

                        <WrapperInput
                            leftText="Номер телефона"
                            htmlFor="phone">
                            <Input name="phone"
                                   type="tel"
                                   id="phone"
                                   style={{marginLeft: 56 + 'px'}}
                                   placeholder="+7 (***) ***-**-**"
                                   onBlur={handleBlur}
                                   onChange={handleChange}
                                   error={touched.phone && errors.phone}
                                   value={values.phone}
                            />
                        </WrapperInput>

                        <WrapperInput
                            leftText="Электронная почта"
                            htmlFor="email">
                            <Input name="email"
                                   type="text"
                                   id="email"
                                   style={{marginLeft: 36 + 'px'}}
                                   onBlur={handleBlur}
                                   onChange={handleChange}
                                   placeholder="Введите email"
                                   error={touched.email && errors.email}
                                   value={values.email}
                            />
                        </WrapperInput>
                        {values.agree && !values.email && (
                            <p className={style.checkBoxText}>Email должен быть заполнен</p>
                        )}
                        <WrapperInput
                            leftText="Я согласен"
                            htmlFor="agree">
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
                            последние изменения{Object.keys(errors).length === 0 && getDate()}
                        </div>

                    </div>

                </div>
            )}
        </Formik>
    )
}

export default Registration