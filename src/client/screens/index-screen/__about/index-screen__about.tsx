import Image from 'next/image';
import {FC} from 'react';
import {cnIndexScreen} from '../index-screen.const';
import AboutImage from './assets/about-image.png';
import SberLogo from './assets/sber.svg';
import './index-screen__about.css';

export const IndexScreenAbout: FC = () => {
    return (
        <section className={cnIndexScreen('about')}>
            <div className={cnIndexScreen('about-container')}>
                <div className={cnIndexScreen('about-block')}>
                    <h2 className={cnIndexScreen('about-title')}>
                        О компании
                    </h2>
                    <p className={cnIndexScreen('about-text')}>
                        «МСК Недвижимость» — агентство полного цикла, свыше 10 лет оказывающее услуги по продаже жилья в
                        столице и Подмосковье.
                        Наш офис находится в центре Москвы, работаем официально и на связи 24/7.
                    </p>
                    <p className={cnIndexScreen('about-text')}>
                        Мы полностью берем на себя все рекламные, организационные и юридические вопросы, связанные с
                        продажей/покупкой вашей квартиры (рекламу на всех площадках за наш счет), организацию
                        показов/просмотров, ведение переговоров с контрагентами (продавцами, риэлторами, нотариусами,
                        регистраторами, ипотечными брокерами и пр.), избавим вас от пустых и типовых разговоров, в том числе
                        звонков агентов по недвижимости и в кратчайшее время безопасно проведем сделку.
                    </p>
                    <p className={cnIndexScreen('about-text')}>
                        Мы создаем максимально комфортные условия для нашего клиента, полностью информируя обо всех этапах
                        нашей работы, у нас есть собственная база клиентов (продавцов/покупателей) — продадим Объект
                        в кратчайшие сроки и по хорошей цене.)
                    </p>
                </div>
                <div className={cnIndexScreen('about-image')}>
                    <Image
                        src={AboutImage}
                        alt={'about'}
                        fill
                    />
                    <div className={cnIndexScreen('about-stats')}>
                        <div className={cnIndexScreen('about-stats-block')}>
                            <h4>10</h4>
                            <p>Лет надежной работы</p>
                        </div>
                        <div className={cnIndexScreen('about-stats-block')}>
                            <h4>25</h4>
                            <p>Разработанных проектов</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cnIndexScreen('about-partners')}>
                <h3 className={cnIndexScreen('about-partners-title')}>
                    Наши партнёры
                </h3>
                <ul className={cnIndexScreen('about-partners-container')}>
                    <li className={cnIndexScreen('about-partners-block')}>
                        <Image
                            src={SberLogo}
                            alt={'sber'}
                        />
                    </li>
                    <li className={cnIndexScreen('about-partners-block')}>
                        <Image
                            src={SberLogo}
                            alt={'sber'}
                        />
                    </li>
                    <li className={cnIndexScreen('about-partners-block')}>
                        <Image
                            src={SberLogo}
                            alt={'sber'}
                        />
                    </li>
                    <li className={cnIndexScreen('about-partners-block')}>
                        <Image
                            src={SberLogo}
                            alt={'sber'}
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};
