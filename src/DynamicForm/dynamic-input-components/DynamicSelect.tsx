// @flow

import React from "react"

import {FieldComponentProps} from "../FieldInterfaces"

interface SelectFieldTypeConfiguration {
  options: string[]
}

export const DynamicSelect = (
  props: FieldComponentProps<SelectFieldTypeConfiguration>
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
    <select
      className={className}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    >
      <option value="">-- Select --</option>
      {fieldTypeConfiguration.options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
