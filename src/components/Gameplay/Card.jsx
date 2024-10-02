import '../../style/Card.css';

export default function Card({imgUrl, breedName, setCardsToShowArr }) {
  
  const handleCardClick = (e) => {
    console.log(e.currentTarget);
  }

    return (
      <div className="card-container" onClick={handleCardClick}>
        <img src={imgUrl} alt={breedName} />
        <p>{breedName}</p>
      </div>
    )
  }