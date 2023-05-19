import style from './Registration.module.css'
import {Field, Formik} from "formik";
import {validationsSchema} from "../validation";
import React from "react";
import cities from './../../json/cities.json'
import Moment from "react-moment";
import registrationUsername from './../../App'

const Registration = (props) => {

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
            {({errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, values, defaultValue}) => (
                <div>
                    <div className={style.page}>
                        {errors.name && touched.name ? (
                            <div className={style.error}>{errors.name}</div>
                        ) : null}
                        <div className={style.block}>
                            <p className={style.text}>Имя
                                <span className={style.textActive}>*</span>
                            </p>
                            <Field name="name"
                                   type="text"
                                   placeholder={props.newNameText}
                                   className={style.inp}
                            />
                        </div>

                        {errors.lastName && touched.lastName ? (
                            <div className={style.error}>{errors.lastName}</div>
                        ) : null}
                        <div className={style.block}>
                            <p className={style.text}>Фамилия
                                <span className={style.textActive}>*</span>
                            </p>
                            <Field name="lastName"
                                   type="text"
                                   placeholder={props.newMiddleNameText}
                                   className={style.inp}/>
                        </div>

                        {errors.city && touched.city ? (
                            <div className={style.error}>{errors.city}</div>
                        ) : null}
                        <div className={style.block}>
                            <p className={style.text}>Ваш город
                                <span className={style.textActive}>*</span>
                            </p>
                            <select className={style.select}
                                    name="city"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder={props.newCity}>
                                {cities.map((cities) => {
                                    if (cities.population > 50000) {
                                        return <option>{cities.city}</option>
                                    }
                                })}
                                <option selected="true" disabled="disabled">Красноярск</option>
                            </select>
                        </div>
                    </div>


                    <div className={style.page}>
                        {errors.password && touched.password ? (
                            <div className={style.error}>{errors.password}</div>
                        ) : null}
                        <div className={style.block}>
                            <p className={style.text}>Пароль</p>
                            <Field name="password"
                                   type="password"
                                   placeholder={props.newPassword}
                                   className={style.inp}/>
                        </div>

                        {errors.repeatPassword && touched.repeatPassword ? (
                            <div className={style.error}>{errors.repeatPassword}</div>
                        ) : null}
                        <div className={style.block}>
                            <p className={style.text}>Пароль еще раз
                                <span className={style.textActive}>*</span>
                            </p>
                            <Field name="repeatPassword"
                                   type="password"
                                   placeholder={props.repeatPassword}
                                   className={style.inp}/>
                        </div>
                    </div>

                    <div className={style.page}>
                        <div className={style.block}>
                            <p className={style.text}>Номер телефона</p>
                            <Field name="phone"
                                   type="phone"
                                   placeholder={props.newPhone}
                                   className={style.inp}
                                   onBlur={handleBlur}
                                   value={values.phone}
                                   onChange={handleChange}
                            />
                        </div>

                        {errors.email && touched.email ? (
                            <div className={style.error}>{errors.email}</div>
                        ) : null}
                        <div className={style.block}>
                            <p className={style.text}>Электронная почта</p>
                            <Field name="email"
                                   type="text"
                                   onBlur={handleBlur}
                                   onChange={handleChange}
                                   value={values.email}
                                   placeholder={props.newMail}
                                   className={style.inp}/>
                        </div>

                        <div className={style.block}>
                            <p className={style.text}>Я согласен</p>
                            <Field
                                name="agree"
                                checked={values.agree}
                                onChange={handleChange}
                                className={style.checkBox} type="checkbox"/>
                            <p className={style.info}>принимать актуальную информацию на email</p>
                        </div>
                        <div className={style.btnBlock}>
                            <button disabled={!isValid && !dirty} onClick={handleSubmit}
                                    className={style.btn}>Изменить
                            </button>
                            <p className={style.info}>последнее изменение <Moment format="DD MMMM YYYY в HH:mm:s" interval={1000}/></p>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default Registration