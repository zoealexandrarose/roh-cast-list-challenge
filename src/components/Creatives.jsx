function Creatives({ creatives }) {
  const creativePeople = creatives?.map((person) => {
    return (
      <li key={person.name}>
        <div>
          {person.name} - {person.role}
        </div>
      </li>
    );
  });
  return <ul>{creativePeople}</ul>;
}
export default Creatives;
