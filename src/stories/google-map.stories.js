import React from "react"

import { GoogleMap } from "../components"

export default {
  title: "Components/Google-Map",
  component: GoogleMap,
}

const Template = args => {
  return <GoogleMap {...args} />
}

export const Plain = Template.bind({})

Plain.args = {
  placeName: "Wah+Hung+Chinese+Kitchen",
  style: { width: `100%`, height: `100vh`, border: `none` },
}
