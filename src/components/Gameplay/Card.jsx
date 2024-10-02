import '../../style/Card.css';

export default function Card({imgUrl, breedName, shuffleCards }) {
  
  const handleCardClick = (e) => {
    console.log(e.currentTarget);
    shuffleCards();
  }



    return (
      <div className="card-container" onClick={handleCardClick}>
        <img src={imgUrl} alt={breedName} />
        <p>{breedName}</p>
      </div>
    )
  }