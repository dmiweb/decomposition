type LinkProps = {
  className: string,
  url: string,
  children: JSX.Element |  JSX.Element[]
}

/**
 * Компонент отображает переданный в него дочерний элемент как сссылку
 */

const Link = ({ className, url, children }: LinkProps): JSX.Element => {
  return (
    <a className={`link ${className}`} href={url}>
      {children}
    </a>
  );
}

export default Link;