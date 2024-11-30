/**
 * Компонент отображает виджет списка любого контента
 */

const WidgetProject = ({ title, children}: { title: string, children: JSX.Element}): JSX.Element => {
  return (
    <div className="widget-project">
      <h2 className="widget-project__title">{title}</h2>
      {children}
    </div>
  );
}

export default WidgetProject;