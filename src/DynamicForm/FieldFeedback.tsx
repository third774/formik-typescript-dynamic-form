// @flow

import React, {Component} from "react"

interface FieldFeedbackProps {
  error: string
  touched: boolean
  dirty: boolean
  name: string
  value: any
}

interface FieldFeedbackState {
  debounceTimer: any
}

export class FieldFeedback extends Component<
  FieldFeedbackProps,
  FieldFeedbackState
> {
  state = {
    debounceTimer: 0
  }

  componentWillReceiveProps(nextProps: FieldFeedbackProps) {
    clearTimeout(this.state.debounceTimer)

    // value has changed
    if (nextProps.value !== this.props.value) {
      const debounceTimer = setTimeout(() => {
        this.setState({debounceTimer: 0})
      }, 500)
      this.setState({debounceTimer})
    } else {
      this.setState({debounceTimer: 0})
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.debounceTimer)
  }

  render() {
    const {error, touched, dirty} = this.props
    const {debounceTimer} = this.state
    return error &&
      ((touched && !debounceTimer) || (dirty && !debounceTimer)) ? (
      <div style={{color: "red"}}>{error}</div>
    ) : null
  }
}
