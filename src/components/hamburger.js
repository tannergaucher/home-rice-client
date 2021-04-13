import React from "react"

export default function Hamburger() {
  return (
    <>
      <div
        style={{
          width: `30px`,
          height: `var(--thickness)`,
          backgroundColor: `var(--text-color)`,
          margin: `6px 0`,
        }}
      ></div>
      <div
        style={{
          width: `30px`,
          height: `var(--thickness)`,
          backgroundColor: `var(--text-color)`,
          margin: `6px 0`,
        }}
      ></div>
      <div
        style={{
          width: `30px`,
          height: `var(--thickness)`,
          backgroundColor: `var(--text-color)`,
          margin: `6px 0`,
        }}
      ></div>
    </>
  )
}
