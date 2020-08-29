import React from "react"

export default function Step({ title, children }) {
  return (
    <details>
      <summary>{title}</summary>
      <p>{children}</p>
    </details>
  )
}
