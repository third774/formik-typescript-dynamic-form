import * as React from "react"
import "./App.css"
import {DynamicForm} from "DynamicForm/DynamicForm"
import {FIELD_CONFIG} from "./FieldConfig"

class App extends React.Component {
  render() {
    return (
      <div>
        <DynamicForm config={FIELD_CONFIG} />
      </div>
    )
  }
}

export default App
