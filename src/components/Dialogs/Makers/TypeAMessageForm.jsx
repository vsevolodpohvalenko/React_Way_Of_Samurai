import React from 'react';
import * as Yup from "yup"
import {Formik, Form, Field, ErrorMessage} from 'formik'
const initialValues = {
    message: ''
}
    const validationSchema = Yup.object({
        message: Yup.string().required('Required')

    })

export const TypeAMessageForm = ({onSubmit}) => {

    return <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form >
            <Field name="message" component="input"  placeholder="Type a message..." type="text"/>
                <ErrorMessage name ="message"/>
            <button type="submit">Send</button>
        </Form>
    </Formik>}
