import React from 'react'

import "./FieldValidate.css";

export default function FieldValidate(props) {
    return (
        <span className={`field-validate field-validate--${props.type}`}>
            {props.label}
        </span>
    )
}
