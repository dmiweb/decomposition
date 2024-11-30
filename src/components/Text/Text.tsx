/**
 * Компонент отображает текст
 */

const Text = ({ className,  children}: { className: string, children: string }): JSX.Element => {
  return (
    <span className={`text ${className}`}>
      {children}
    </span>
  );
}

export default Text;