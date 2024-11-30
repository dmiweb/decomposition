/**
 * Компонент отображает один элемент меню компонента Menu
 */

const MenuItem = ({ className, children }: {className: string, children: string}): JSX.Element => {
  console.log(children)
  return (
    <a className={`menu__item ${className}`} href="#">
      {children}
    </a>
  );
}

export default MenuItem;