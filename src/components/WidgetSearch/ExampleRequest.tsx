/**
 * Компонент отображает элемент-строку, пример рандомного поискового запроса
 */

const ExampleRequest = ({ request }: { request: string }): JSX.Element => {
  return (
    <div className='widget-search__example-request example-request'>
      <span className="example-request__title">Найдется все. Например, </span>
      <span className="example-request__random-request">{request}</span>
    </div>
  );
}

export default ExampleRequest;