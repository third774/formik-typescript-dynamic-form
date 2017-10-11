// @flow

import React, {Component} from "react"

import {FieldComponentProps} from "../FieldInterfaces"

interface MultiCheckboxFieldTypeConfiguration {
  options: string[]
}

// export const DynamicMultiCheckbox = (
//   props: FieldComponentProps<MultiCheckboxFieldTypeConfiguration>
// ) => {
//   const {name, value, onChange, onBlur, fieldTypeConfiguration} = props
//   return (
//     <input
//       type="checkbox"
//       name={name}
//       checked={!!value}
//       onChange={onChange}
//       onBlur={onBlur}
//     />
//   )
// }

export class DynamicMultiCheckbox extends Component<
  FieldComponentProps<MultiCheckboxFieldTypeConfiguration>,
  {value: string[]}
> {
  state = {
    value: this.props.value
  }

  handleChange = (option: string, alreadyChecked: boolean) => (e: any) => {
    // const {onChange, value} = this.props
    // if (alreadyChecked) {
    //   const newValue = value.filter(x => x === option)
    //   console.log(newValue)
    //   onChange(e, newValue)
    // } else {
    //   const newValue = [...value, option]
    //   console.log(newValue)
    //   onChange(e, newValue)
    // }
  }

  render() {
    const {
      name,
      value,
      // onChange,
      // onBlur,
      fieldTypeConfiguration
    } = this.props
    console.log(value)
    return (
      <div>
        {fieldTypeConfiguration.options.map((option, index) => (
          <label key={index}>
            {option}
            <input
              name={name}
              onChange={this.handleChange(
                option,
                value.some((x: string) => x === option)
              )}
              type="checkbox"
            />
          </label>
        ))}
      </div>
    )
  }
}
