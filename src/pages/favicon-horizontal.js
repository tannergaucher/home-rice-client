import React from "react"

export default function Favicon() {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        minHeight: `100vh`,
        minWidth: `100vw`,
      }}
    >
      <h1
        className="title"
        style={{
          fontSize: `72vmin`,
          marginBlockStart: `0`,
          marginBlockEnd: `0`,
          color: `var(--accent-1)`,
          textShadow: `red 2vw 5vw`,
          padding: `var(--space-sm)`,
        }}
      >
        H R
      </h1>
    </div>
  )
}
