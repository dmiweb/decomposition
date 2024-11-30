/**
 * Компонент отображает кнопку 
 */

const Button = ({className, name}: {className: string, name: string}): JSX.Element => {
  return (
    <button type='button' className={`button ${className}`}>{name}</button>
  );
}

export default Button;