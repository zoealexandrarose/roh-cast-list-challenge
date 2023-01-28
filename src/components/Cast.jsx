function Cast({ cast }) {
  const castPeople = cast?.map((person) => {
    return (
      <li key={person.name}>
        <div>
          {person.role} - {person.name}
        </div>
      </li>
    )
  })
  return <ul>{castPeople}</ul>
}

export default Cast;
