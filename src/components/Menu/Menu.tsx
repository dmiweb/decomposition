/**
 * Компонент отображает меню
 */

const Menu = ({className, children }: {className: string, children: JSX.Element[]}): JSX.Element => {
  return (
    <nav className={`menu ${className}`}>
      {children}
    </nav>
  );
}

export default Menu;