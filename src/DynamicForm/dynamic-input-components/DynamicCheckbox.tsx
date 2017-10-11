// @flow

import React from "react"

import {FieldComponentProps} from "../FieldInterfaces"

export const DynamicCheckbox = (props: FieldComponentProps<any>) => {
  const {name, value, onChange, onBlur} = props
  return (
    <input
      type="checkbox"
      name={name}
      checked={!!value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}
