import Image from 'next/image';
import {FC, useMemo} from 'react';
import {cnIndexScreen} from '~/client/screens/index-screen/index-screen.const';
import Nedeli from './assets/6-nedel.png';
import Ipoteka from './assets/ipoteka.png';
import Ocenka from './assets/ocenka.png';
import Dolgi from './assets/prodat-s-dolgami.png';
import Proverka from './assets/proverka.png';
import Vikup from './assets/vikup.png';
import './index-screen__advantage.css';

const advantageBlocks = [
    {
        image: Ipoteka,
        title: 'Подбор ипотеки',
        description: 'Под любую квартиру'
    },
    {
        image: Vikup,
        title: 'Срочный выкуп',
        description: 'Вашей квартиры'
    },
    {
        image: Dolgi,
        title: 'Продать квартиру с долгами',
        description: 'Официально'
    },
    {
        image: Nedeli,
        title: 'Продажа квартиры за 6 недель',
        description: 'С гарантией'
    },
    {
        image: Ocenka,
        title: 'Оценка объекта недвижимости',
        description: 'В Москве и области'
    },
    {
        image: Proverka,
        title: 'Проверка объекта недвижимости',
        description: 'Со специалистом'
    }
];

export const IndexScreenAdvantage: FC = () => {
    const renderBlocks = useMemo(() => advantageBlocks.map(block =>
        <div
            className={cnIndexScreen('advantage-block')}
            key={block.title}
        >
            <Image
                className={cnIndexScreen('advantage-block-image')}
                src={block.image}
                alt={block.title}
            />
            <div className={cnIndexScreen('advantage-block-decimetre')}/>
            <div className={cnIndexScreen('advantage-block-body')}>
                <div className={cnIndexScreen('advantage-block-title')}>
                    {block.title}
                </div>
                <div className={cnIndexScreen('advantage-block-description')}>
                    {block.description}
                </div>
            </div>
        </div>
    ), []);

    return (
        <section className={cnIndexScreen('advantage')}>
            {renderBlocks}
        </section>
    );
};
