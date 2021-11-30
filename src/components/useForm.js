import React from 'react';
import {useState, useEffect} from "react";

const useForm = (validate, formData) => {
    const [values, setValues] = useState(formData);
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(values);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
    }

    return {handleChange, values, setValues, handleSubmit, errors, setErrors};

};

export default useForm;