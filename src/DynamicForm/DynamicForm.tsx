// @flow

import React, {Component} from "react"
import {StatelessComponent, ComponentType, ChangeEvent} from "react"
import {withFormik, InjectedFormikProps} from "formik"

import {FieldConfiguration, FieldComponentProps} from "./FieldInterfaces"
import {Validators} from "./Validators"
import {DynamicInput} from "./dynamic-input-components/DynamicInput"
import {DynamicCheckbox} from "./dynamic-input-components/DynamicCheckbox"
import {DynamicRadio} from "./dynamic-input-components/DynamicRadio"
import {DynamicTextArea} from "./dynamic-input-components/DynamicTextArea"
import {DynamicMultiCheckbox} from "./dynamic-input-components/DynamicMultiCheckbox"

import {FieldFeedback} from "./FieldFeedback"
import {DynamicSelect} from "DynamicForm/dynamic-input-components/DynamicSelect"

interface DynamicFormProps {
  config: FieldConfiguration<{}>[]
}

interface Values {
  [key: string]: {}
}

interface DynamicFormState {
  dirtyFields: {
    [key: string]: boolean
  }
}

const FIELD_MAP = {
  input: DynamicInput,
  checkbox: DynamicCheckbox,
  select: DynamicSelect,
  radio: DynamicRadio,
  textarea: DynamicTextArea,
  multicheckbox: DynamicMultiCheckbox
}

class PlainDynamicForm extends Component<
  InjectedFormikProps<DynamicFormProps, Values>,
  DynamicFormState
> {
  state = {
    dirtyFields: {}
  }

  handleReset = () => {
    this.setState({dirtyFields: {}})
    this.props.handleReset()
  }

  handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    this.setState({
      dirtyFields: {
        ...this.state.dirtyFields,
        [e.target.name]: true
      }
    })
  }

  render() {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      config
    } = this.props
    const {dirtyFields} = this.state
    return (
      <form onSubmit={handleSubmit} onChange={this.handleChange}>
        {config.map((field, index) => {
          const FieldComponent:
            | StatelessComponent<FieldComponentProps<{}>>
            | ComponentType<FieldComponentProps<{}>> =
            FIELD_MAP[field.fieldType]
          return (
            <div className="form-group" key={index}>
              <label className="control-label">
                {field.label}
                <FieldComponent
                  className="form-control"
                  name={field.name}
                  value={values[field.name]}
                  fieldTypeConfiguration={field.fieldTypeConfiguration || {}}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              <FieldFeedback
                touched={touched[field.name]}
                value={values[field.name]}
                error={errors[field.name]}
                dirty={dirtyFields[field.name]}
                name={field.name}
              />
            </div>
          )
        })}
        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
        <button
          className="btn btn-default pull-right"
          type="button"
          onClick={this.handleReset}
        >
          Reset
        </button>
      </form>
    )
  }
}

const formikEnhancer = withFormik<DynamicFormProps, Values, Values>({
  validate: (values, props) => {
    const config: FieldConfiguration<{}>[] = props.config
    const errors = {}
    config.forEach(field => {
      if (field.validators) {
        const firstBrokenValidationRule = field.validators.find(
          validatorConfig => {
            return (
              Validators[validatorConfig.validatorType](
                values[field.name],
                field.label,
                ...[validatorConfig.validatorArgs]
              ) !== null
            )
          }
        )
        if (firstBrokenValidationRule) {
          errors[field.name] = Validators[
            firstBrokenValidationRule.validatorType
          ](
            values[field.name],
            field.label,
            ...[firstBrokenValidationRule.validatorArgs]
          )
        }
      }
    })
    return errors
  },

  mapPropsToValues: props => {
    const config: FieldConfiguration<{}>[] = props.config
    const values = config.reduce(
      (acc, field) => ({
        ...acc,
        [field.name]: field.value
      }),
      {}
    )
    return values
  },
  handleSubmit: (payload, {setSubmitting}) => {
    console.log(payload)
    setSubmitting(false)
  }
})

export const DynamicForm = formikEnhancer(PlainDynamicForm)
