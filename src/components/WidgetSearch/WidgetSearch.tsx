/**
 * Компонент отображает виджет поиска для ввода поисковых запросов
 */

const WidgetSearch = ({children}: {children: JSX.Element[]} ): JSX.Element => {
  return (
    <div className='widget-search'>
      {children}
    </div>
  );
}

export default WidgetSearch;