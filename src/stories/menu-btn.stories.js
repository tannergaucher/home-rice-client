import React from "react"

import { MenuBtn } from "../components"
import { pages as myPages } from "../utils/constants"

export default {
  title: "Components/Menu-Btn",
  component: MenuBtn,
}

const Template = args => {
  return <MenuBtn {...args} />
}

export const Plain = Template.bind({})

Plain.args = {
  pages: myPages,
}
