type ListItemProps = {
  className: string, 
  children: JSX.Element | JSX.Element[]
}

/**
 * Компонент отображает список элементов
 */

const ListItems = ({className, children}: ListItemProps): JSX.Element => {
  return (
    <ul className={`list-items ${className}`}>
      {children}
    </ul>
  );
}

export default ListItems;