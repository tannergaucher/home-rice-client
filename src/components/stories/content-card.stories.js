import React from "react"

import { ContentCard } from "../content-card"

export default {
  title: "Component/Content-Card",
  component: ContentCard,
}

const Template = args => <ContentCard {...args} />

export const Plain = Template.bind({})

Plain.args = {
  heading: "Card heading",
  text: "Card text",
  fluid: "",
}
