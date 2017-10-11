// @flow

import React from "react"

import {FieldComponentProps} from "../FieldInterfaces"

interface InputFieldTypeConfiguration {
  placeholder: string
  inputType: string
}

export const DynamicInput = (
  props: FieldComponentProps<InputFieldTypeConfiguration>
) => {
  const {
    name,
    value,
    fieldTypeConfiguration,
    onChange,
    onBlur,
    className
  } = props
  return (
    <input
      className={className}
      value={value}
      name={name}
      placeholder={fieldTypeConfiguration.placeholder}
      type={fieldTypeConfiguration.inputType}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}
