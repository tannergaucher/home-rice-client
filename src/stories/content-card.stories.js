import React from "react"

import { ContentCard } from "../components"

export default {
  title: "Components/Content-Card",
  component: ContentCard,
}

const Template = args => {
  return <ContentCard {...args} />
}

export const Plain = Template.bind({})

Plain.args = {
  heading: "Card heading",
  text: "Card text",
  fluid: "",
}

export const Large = Template.bind({})

Large.args = {
  heading: "Large prop card",
  text: "Card text",
  fluid: "",
  size: "lg",
}
