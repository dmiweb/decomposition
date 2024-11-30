/**
 * Компонент отображает текстовое поле ввода (type text)
 */

const InputText = ({ className }: { className: string }): JSX.Element => {
  return (
    <input type="text" className={`input ${className}`} />
  );
}

export default InputText;