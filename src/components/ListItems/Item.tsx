type ItemProps = {
  className: string, 
  children: JSX.Element | JSX.Element[]
}

/**
 * Компонент отображает один элемент в списке элементов компонента ListItems
 */

const Item = ({ className, children }: ItemProps): JSX.Element => {
  return (
    <li className={`list-items__item ${className}`}>
        {children}
    </li>
  );
}

export default Item;