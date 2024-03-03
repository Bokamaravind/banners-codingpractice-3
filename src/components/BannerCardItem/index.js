// Write your code here.
import './index.css'
const CardList = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="head">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button" type="button">
          show more
        </button>
      </div>
    </li>
  )
}
export default CardList
