const RepositoryItem = (props) => {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href="/">{props.repository.link}</a>
    </li>
  );
};

export default RepositoryItem;