import React from "react"

import { EmailCaptureForm } from "../components"

export default {
  title: "Components/Email-Capture-Form",
  component: EmailCaptureForm,
}

const Template = args => {
  return <EmailCaptureForm {...args} />
}

export const Plain = Template.bind({})

Plain.args = {}
