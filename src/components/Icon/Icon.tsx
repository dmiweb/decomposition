/**
 * Компонент отображает иконку
 */

const Icon = ({ className, url}: { className: string, url: string}): JSX.Element => {
  return (
    <img className={`icon ${className}`} src={url} alt="..." />
  );
}

export default Icon;