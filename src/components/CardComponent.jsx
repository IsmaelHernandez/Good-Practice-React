const CardComponent = ({ person, onClick, isSelected }) => {
  return (
    <div
        className={`card ${isSelected ? 'bg-success text-white' : ''} ml-2 mr-2`}
        style={{ width: "18rem", marginBottom: "1rem", cursor: "pointer" }}
      onClick={() => onClick(person)}
    >
      <div className="card-header active">
        {person.name} {person.lastName}
      </div>
      <div className="card-body">
        <h5 className="card-title">Age: {person.age}</h5>
        <p className="card-text">
          This is {person.name} {person.lastName}, and they are {person.age}{" "}
          years old.
        </p>
      </div>
    </div>
  );
}

export default CardComponent;
