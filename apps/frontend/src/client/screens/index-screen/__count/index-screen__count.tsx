import {FC} from 'react';
import {IProductInfo} from '~/client/shared/types/product-info';
import {cnIndexScreen} from '../index-screen.const';
import './index-screen__count.css';

interface IIndexScreenCountProps {
    count: IProductInfo;
}

export const IndexScreenCount: FC<IIndexScreenCountProps> = ({count}) => {
    // Превращает ключ рекорда в текст
    const keyToText = (key: string) => {
        switch (key) {
            case 'rooms_1':
                return '1 - комнатные';
            case 'rooms_2':
                return '2 - комнатные';
            case 'rooms_3':
                return '3 - комнатные';
            case 'rooms_4':
                return '4 - комнатные';
            case 'out_city':
                return 'Загородные участки';
            case 'commercial':
                return 'Коммерческая недвижимость';
            case 'atelier':
                return 'Студии';
            case 'rooms_mos':
                return 'Комнаты в Москве';
            default:
                return key;
        }
    };

    return (
        <section className={cnIndexScreen('count')}>
            <div className={cnIndexScreen('count-block')}>
                <div className={cnIndexScreen('count-container')}>
                    <h3 className={cnIndexScreen('count-title')}>
                        Купить
                    </h3>
                    <ul className={cnIndexScreen('count-list')}>
                        {Object?.entries(count)?.map(([key, value]) =>
                            <li key={key}>
                                {keyToText(key)}
                                <span className={cnIndexScreen('count-line')}/>
                                {value}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className={cnIndexScreen('count-block')}>
                <div className={cnIndexScreen('count-container')}>
                    <h3 className={cnIndexScreen('count-title')}>
                        Продать
                    </h3>
                    <ul className={cnIndexScreen('count-list')}>
                        <li>Квартиры</li>
                        <li>Комнаты</li>
                        <li>Новостройки</li>
                        <li>Загородную недвижимость</li>
                        <li>Коммерческую недвижимость</li>
                    </ul>
                </div>
                <div className={cnIndexScreen('count-block')}>
                    <div className={cnIndexScreen('count-container')}>
                        <h3 className={cnIndexScreen('count-call-title')}>
                            Связаться с менеджером по телефону
                        </h3>
                        <p className={cnIndexScreen('count-phone')}>
                            +7 (495) 944-06-33
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};
