/**
 * Компонент отображает рекламный блок
 */

const AdBlock = ({ className,  children}: { className: string, children: JSX.Element}): JSX.Element => {
  return (
    <span className={`ad-block ${className}`}>
      {children}
    </span>
  );
}

export default AdBlock;