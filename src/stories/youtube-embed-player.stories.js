import React from "react"

import { YoutubeEmbedPlayer } from "../components"

export default {
  title: "Components/YouTube-Embed-Player",
  component: YoutubeEmbedPlayer,
}

const Template = args => {
  return <YoutubeEmbedPlayer {...args} />
}

export const Plain = Template.bind({})

Plain.args = {
  title:
    "Making Thai Waterfall Beef Salad on Tao Charcoal Burner in Brooklyn | NAM TOK NEUA | เนื้อนำ้ตก",
  youtubeVideoId: "ZeN8UTpsy4o",
  style: {},
}
