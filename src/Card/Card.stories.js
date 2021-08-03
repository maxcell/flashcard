import {Card, states as CardStates} from './Card'
import {Fragment, useState} from 'react'

export default {
  title: 'Example/Card',
  component: Card,
};

export const SimpleCard = (args) => {
  const [displaySide, setDisplaySide] = useState(CardStates.front)
  return (
    <Fragment>
      <Card {...args} displaySide={displaySide}/>
      <button onClick={() => setDisplaySide(CardStates.front)}>Flip to Front</button>
      <button onClick={() => setDisplaySide(CardStates.back)}>Flip to Back</button>
    </Fragment>
  )
}

SimpleCard.args = {
  front: "Beef",
  back: "Not Beef"
}