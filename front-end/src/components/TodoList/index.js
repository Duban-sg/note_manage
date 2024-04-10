function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section>
      {props.searchedNotes.map(renderFunc)}

    </section>
    
  );
}

export { TodoList };