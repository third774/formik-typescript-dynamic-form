// @flow

import {ChangeEvent} from "react"
import {ValidatorConfig} from "./Validators"

export interface FieldComponentProps<TFieldTypeConfiguration> {
  name: string
  value: any
  className: string
  onChange: (e: ChangeEvent<any>) => void
  onBlur: (e: any) => void
  fieldTypeConfiguration: TFieldTypeConfiguration
}

export interface FieldConfiguration<TFieldTypeConfiguration> {
  label: string
  name: string
  fieldType: FieldType
  value: any
  validators?: ValidatorConfig[]
  fieldTypeConfiguration?: TFieldTypeConfiguration
}

type FieldType =
  | "input"
  | "checkbox"
  | "select"
  | "radio"
  | "textarea"
  | "multicheckbox"
