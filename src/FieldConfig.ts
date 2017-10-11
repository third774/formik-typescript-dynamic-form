// @flow

import {FieldConfiguration} from "./DynamicForm/FieldInterfaces"

export const FIELD_CONFIG: FieldConfiguration<{}>[] = [
  {
    label: "Email",
    name: "email",
    value: "",
    fieldType: "input",
    validators: [
      {
        validatorType: "required"
      },
      {
        validatorType: "email"
      }
    ],
    fieldTypeConfiguration: {
      placeholder: "jane.doe@email.com",
      inputType: "email"
    }
  },
  {
    label: "Password",
    name: "password",
    value: "",
    fieldType: "input",
    validators: [
      {
        validatorType: "required"
      },
      {
        validatorType: "minLength",
        validatorArgs: [6]
      }
    ],
    fieldTypeConfiguration: {
      placeholder: "Password",
      inputType: "password"
    }
  },
  {
    label: "Remember Me",
    name: "rememberMe",
    value: false,
    fieldType: "checkbox"
    // validators: ["required"],
  },
  {
    label: "How did you hear about us?",
    name: "howDidYouHearAboutUs",
    value: "",
    fieldType: "select",
    validators: [
      {
        validatorType: "required"
      }
    ],
    fieldTypeConfiguration: {
      options: ["Friend", "Conference Talk", "Social Media"]
    }
  },
  {
    label: "Preferred Contact Method",
    name: "preferredContactMethod",
    value: "",
    fieldType: "radio",
    validators: [
      {
        validatorType: "required"
      }
    ],
    fieldTypeConfiguration: {
      options: ["email", "phone", "snail mail"]
    }
  },
  {
    label: "Tell us about yourself",
    name: "tellUsAboutYourself",
    value: "",
    fieldType: "textarea",
    validators: [
      {
        validatorType: "required"
      }
    ],
    fieldTypeConfiguration: {
      placeholder: "I like long walks on the beach..."
    }
  }
  // {
  //   label: "Allowed Contact Methods",
  //   name: "allowedContactMethods",
  //   value: [],
  //   fieldType: "multicheckbox",
  //   fieldTypeConfiguration: {
  //     options: ["email", "phone", "snail mail"]
  //   }
  // }
]
