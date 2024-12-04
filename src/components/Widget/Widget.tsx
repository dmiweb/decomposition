type WidgetProps = {
  className: string,
  title?: string,
  children: JSX.Element | JSX.Element[]
}

/**
 * Компонент отображает виджет списка любого контента
 */

const Widget = ({className, title, children}: WidgetProps): JSX.Element => {
  return (
    <div className={className}>
      {title && <h2 className="widget-project__title">{title}</h2>}
      {children}
    </div>
  );
}

export default Widget;