
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
    <div css={{
        width: '250px',
        height: '150px',
        border: '1px solid #EDEDED',
        boxShadow: '0px 0px 5px 2px #1D1D1D',
        backgroundColor: '#EDEDED'
      }}>
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