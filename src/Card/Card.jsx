
export const states = {
  front: "FRONT",
  back: "BACK"
}

export const Card = (props) => {
  const {
    front,
    back,
    displaySide = states.front
  } = props;

  return (
    <div>
      {displaySide === states.front && front}
      {displaySide === states.back && back}
    </div>
  )
}
/*
  front
  back
  sideToDisplay

*/