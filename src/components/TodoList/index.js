import { Container } from "./styles";

export const TodoList = ({
  error,
  loading,
  filterTodos,
  total,
  search,
  onError,
  onLoading,
  onEmpty,
  onNoResults,
  render,
  children,
}) => {
  const getRender = children || render;

  return (
    <Container>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !total && onEmpty()}
      {!!total && !filterTodos.length && onNoResults(search)}
      {!loading && filterTodos.map(getRender)}
    </Container>
  );
};
