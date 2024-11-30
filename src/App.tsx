import './App.css';
import img from './assets/react.svg';
import WidgetNews from './components/WidgetNews/WidgetNews';
import UpdateNewsDate from './components/WidgetNews/UpdateNewsDate';
import WidgetSearch from './components/WidgetSearch/WidgetSearch';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import ListItems from './components/ListItems/ListItems';
import Item from './components/ListItems/Item';
import Link from './components/Link/Link';
import Icon from './components/Icon/Icon';
import Text from './components/Text/Text';
import Button from './components/Button/Button';
import InputText from './components/InputText/InputText';
import ExampleRequest from './components/WidgetSearch/ExampleRequest';
import AdBlock from './components/AdBlock/AdBlock';
import WidgetProject from './components/WidgetProject/WidjetProject';

function App() {
  return (
    <>
      <header className='header'>
        <WidgetNews>
          <Menu className={"widget-news__menu"}>
            <MenuItem className={"widget-news__menu-item"}>Сейчас в СМИ</MenuItem>
            <MenuItem className={"widget-news__menu-item"}>В Германии</MenuItem>
            <MenuItem className={"widget-news__menu-item"}>Рекомендуем</MenuItem>
            <UpdateNewsDate />
          </Menu>

          <ListItems className={"widget-news__list-news list-news"}>
            <Item className={"list-news__item"}>
              <Link className={"list-news__link"} url={"#"}>
                <Icon className={"list-news__icon"} url={img} />
                <Text className={"list-news__text"}>
                  Путин упростил получение автомобильных номеров
                </Text>
              </Link>
            </Item>
            <Item className={"list-news__item"}>
              <Link className={"list-news__link"} url={"#"}>
                <Icon className={"list-news__icon"} url={img} />
                <Text className={"list-news__text"}>
                  "Турпомощь" прокомментировала гибель десятков россиян в Анталье
                </Text>
              </Link>
            </Item>
            <Item className={"list-news__item"}>
              <Link className={"list-news__link"} url={"#"}>
                <Icon className={"list-news__icon"} url={img} />
                <Text className={"list-news__text"}>
                  В команде Зеленского раскрыли план реформ на украине
                </Text>
              </Link>
            </Item>
            <Item className={"list-news__item"}>
              <Link className={"list-news__link"} url={"#"}>
                <Icon className={"list-news__icon"} url={img} />
                <Text className={"list-news__text"}>
                  Суд закрыл дело Демпартии США против России
                </Text>
              </Link>
            </Item>
            <Item className={"list-news__item"}>
              <Link className={"list-news__link"} url={"#"}>
                <Icon className={"list-news__icon"} url={img} />
                <Text className={"list-news__text"}>
                  На Украине призвали создать ракеты для удара по Москве 
                </Text>
              </Link>
            </Item>
          </ListItems>

          <ListItems className={"stock-exchange-quotes"}>
            <Item className={"stock-exchange-quotes__item"}>
              <Link className={"stock-exchange-quotes__link"} url={"#"}>
                <Text className={"stock-exchange-quotes__text"}>USD MOEX 63,52</Text>
              </Link>
            </Item>
            <Item className={"stock-exchange-quotes__item"}>
              <Link className={"stock-exchange-quotes__link"} url={"#"}>
                <Text className={"stock-exchange-quotes__text"}>EUR MOEX 70,86</Text>
              </Link>
            </Item>
            <Item className={"stock-exchange-quotes__item"}>
              <Link className={"stock-exchange-quotes__link"} url={"#"}>
                <Text className={"stock-exchange-quotes__text"}>НЕФТЬ 64,90</Text>
              </Link>
            </Item>
          </ListItems>
        </WidgetNews>

        <AdBlock className='ad-block'>
          <div className='ad-block__top'>Ad</div>
        </AdBlock>
      </header>

      <section className='section'>
        <WidgetSearch>
          <Menu className={"widget-search__menu"}>
            <MenuItem className={"widget-search__menu-item"}>Видео</MenuItem>
            <MenuItem className={"widget-search__menu-item"}>Картинки</MenuItem>
            <MenuItem className={"widget-search__menu-item"}>Новости</MenuItem>
            <MenuItem className={"widget-search__menu-item"}>Карты</MenuItem>
            <MenuItem className={"widget-search__menu-item"}>Маркет</MenuItem>
            <MenuItem className={"widget-search__menu-item"}>Переводчик</MenuItem>
            <MenuItem className={"widget-search__menu-item"}>Эфир</MenuItem>
            <MenuItem className={"widget-search__menu-item"}>еще</MenuItem>
          </Menu>

          <div className='widget-search__wrap'>
            <Logo />
            <InputText className={"widget-search__input"} />
            <Button className={"widget-search__send-btn"} name={"Найти"} />
          </div>
          <ExampleRequest request={"фаза луны сегодня"} />

          <AdBlock className='ad-block'>
            <div className='ad-block__center'>Ad</div>
          </AdBlock>
        </WidgetSearch>
      </section>

      <footer className='footer'>
        <WidgetProject title={"Погода"}>
          <div className='weather'>
            <div className='weather__now'>
              <Icon className={"weather__now-icon"} url={img} />
              <Text className={"weather__now-degrees"}>+17°</Text>
            </div>
            <div className='weather__today'>
              <Text className={"weather__today-morning"}>Утром +17,</Text>
              <Text className={"weather__today-afternoon"}>днем +20</Text>
            </div>
          </div>
        </WidgetProject>

        <WidgetProject title={"Посещаемое"}>
          <div className="visited">
            <Link className="visited__link" url="#">
              <Text className="visited__item">Недвижимость - </Text>
              <Text className="visited__description">о сталинках</Text>
            </Link>
            <Link className="visited__link" url="#">
              <Text className="visited__item">Маркет - </Text>
              <Text className="visited__description">люстры и светильники</Text>
            </Link>
            <Link className="visited__link" url="#">
              <Text className="visited__item">Авто.ру - </Text>
              <Text className="visited__description">привод 4х4 до 500 000</Text>
            </Link>
          </div>
        </WidgetProject>

        <WidgetProject title={"Карта Германии"}>
          <div className='map-of-germany'>
            <Link className="map-of-germany__link" url="#">
              <Text className="map-of-germany__item">Расписания</Text>
            </Link>
          </div>
        </WidgetProject>

        <WidgetProject title={"Телепрограмма"}>
          <div className='tv-program'>
            <Link className="tv-program__link" url="#">
              <Text className="tv-program__time">02:00</Text>
              <Text className="tv-program__item">ТНТ.Best</Text>
              <Text className="tv-program__description">ТНТ International</Text>
            </Link>
            <Link className="tv-program__link" url="#">
              <Text className="tv-program__time">02:15</Text>
              <Text className="tv-program__item">Джинглики</Text>
              <Text className="tv-program__description">Карусель INT</Text>
            </Link>
            <Link className="tv-program__link" url="#">
              <Text className="tv-program__time">02:25</Text>
              <Text className="tv-program__item">Наедине со всеми</Text>
              <Text className="tv-program__description">Первый</Text>
            </Link>
          </div>
        </WidgetProject>

        <WidgetProject title={"Эфир"}>
          <div className='ether'>
            <Link className="ether__link" url="#">
              <Icon className={"ether-icon"} url={img}/>
              <Text className="ether__item">Управление как искусство</Text>
              <Text className="ether__description">Успех</Text>
            </Link>
            <Link className="ether__link" url="#">
              <Icon className={"ether-icon"} url={img}/>
              <Text className="ether__item">Ночь. Мир в это время</Text>
              <Text className="ether__description">earthTV</Text>
            </Link>
            <Link className="ether__link" url="#">
              <Icon className={"ether-icon"} url={img}/>
              <Text className="ether__item">Андрей Возн...</Text>
              <Text className="ether__description">Совершенно секретно</Text>
            </Link>
          </div>

        </WidgetProject>
      </footer>
    </>
  )
}

export default App
