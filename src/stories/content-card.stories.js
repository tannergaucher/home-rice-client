import React from "react"

import { ContentCard } from "../components"

export default {
  title: "Component/Content-Card",
  component: ContentCard,
}

const Template = args => <ContentCard {...args} />

export const Plain = Template.bind({})
Plain.args = {
  heading: "hey",
  text: "WOW",
}
