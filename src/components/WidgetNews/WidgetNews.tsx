/**
 * Компонент отображает виджет списка новостей
 */

const WidgetNews = ({children}: {children: JSX.Element[]} ): JSX.Element => {
  return (
    <div className='widget-news'>
      {children}
    </div>
  );
}

export default WidgetNews;