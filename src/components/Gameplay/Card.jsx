import '../../style/Card.css';

export default function Card({imgUrl, breedName }) {
  
    return (
      <div className="card-container">
        <img src={imgUrl} alt={breedName} />
        <p>{breedName}</p>
      </div>
    )
  }