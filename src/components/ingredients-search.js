import React from "react"

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox"

import "@reach/combobox/styles.css"

export default function IngredientsSearch({ ingredients }) {
  return (
    <div>
      <Combobox aria-labelledby="demo">
        <ComboboxInput className="input" />
        <ComboboxPopover>
          <ComboboxList>
            <ComboboxOption value="Apple" />
            {ingredients.map(ingredient => (
              <ComboboxOption value={ingredient.node.text} />
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}
