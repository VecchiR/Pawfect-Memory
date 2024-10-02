import '../../style/Card.css';

export default function Card({imgUrl, breedName, handleCardClick }) {
  
    return (
      <div className="card-container" onClick={handleCardClick}>
        <img src={imgUrl} alt={breedName} />
        <p>{breedName}</p>
      </div>
    )
  }