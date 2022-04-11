import '../assets/scss/components/storeCard.scss'

const StoreCard = ({
  title,
  description,
  price,
  image
}) => {
  return (
    <div className="store_card">
      <div className="store_card--image">
        <img src="https://nachosbucket.s3.us-east-2.amazonaws.com/greyCafHoodie.jpg" />
      </div>
      <div className="store_card--title">
        <span><b>{title}</b></span>
      </div>
      <div className="store_card__data">
        <div className="store_card__data--description">
          <span>{description}</span>
        </div>
        <div className="store_card__data--price">
          <span className="store_card__data--price--sign">$</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  )
}

export default StoreCard;