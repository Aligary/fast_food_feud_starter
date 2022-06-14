import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  const {item}=props
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>
      <h4 className="item-name">{item?.item_name}</h4>

      <ul className="fact-list">
        {nutritionFacts.map((e) => {
          return <NutritionalLabelFact
          key={e.id}
          label={e.label}
          attribute={e.attribute}
          item={item}
          />
        })}
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  
  let word =  props.attribute != 'fiber' ? props.item?.[props.attribute] : props.item?.["dietary_fiber"]

  console.log(props)
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{word}</span>
    </li>
  )
  
}

export default NutritionalLabel
