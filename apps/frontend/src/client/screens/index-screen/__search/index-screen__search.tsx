import Image from 'next/image';
import {FC, useState} from 'react';
import {Button} from '~/client/shared/components/button/button';
import {DoubleInput} from '~/client/shared/components/double-input/double-input';
import {Select} from '~/client/shared/components/select/select';
import {cnIndexScreen} from '../index-screen.const';
import PointIcon from './assets/pin.svg';

import './index-screen__search.css';

const stockTypes = [
    {id: 1, name: 'Квартиры и комнаты'},
    {id: 2, name: 'Коммерческая'},
    {id: 3, name: 'Дома и участки'},
    {id: 4, name: 'Гаражи / парковки'}
];

const roomTypes = [
    {id: 1, name: '1 Комнатные'},
    {id: 2, name: '2х Комнатные'},
    {id: 3, name: '3х Комнатные'},
    {id: 4, name: '4х Комнатные'}
];


export const IndexScreenSearch: FC = () => {

    const [filter, setFilter] = useState({
        type: 1,
        rooms: 1,
        priceStart: 0,
        priceEnd: 0,
        address: ''
    });

    const redirect = () => {
        const searchParams = new URLSearchParams(filter);
        window.location.href = '/catalog?' + searchParams;
    };

    return (
        <section className={cnIndexScreen('search')}>
            <h1 className={cnIndexScreen('search-title')}>
                Найти недвижимость в Москве
            </h1>
            <form className={cnIndexScreen('search-form')}>
                <div className={cnIndexScreen('search-form-container')}>
                    <Select
                        value={stockTypes.find(item => item.id === filter.type)?.name}
                        onChange={value => setFilter((prev) => ({...prev, type: value}))}
                    >
                        {stockTypes.map(item => (
                            <Select.Option
                                key={item.id}
                                value={item.id}
                            >
                                {item.name}
                            </Select.Option>
                        ))}
                    </Select>

                    <Select
                        value={filter.rooms}
                        onChange={value => setFilter((prev) => ({...prev, rooms: value}))}
                        transformValue={value => `Комнат: ${value}`}
                    >
                        <Select.Option
                            value={1}
                            key={1}
                        >
                            1
                        </Select.Option>
                        <Select.Option
                            value={2}
                            key={2}
                        >
                            2
                        </Select.Option>
                        <Select.Option
                            value={3}
                            key={3}
                        >
                            3
                        </Select.Option>
                    </Select>
                    <DoubleInput
                        first={{
                            type: 'number',
                            placeholder: 'От 0 млн ₽'
                        }}
                        second={{
                            type: 'number',
                            placeholder: 'До 10 млн ₽'
                        }}
                    />
                </div>
                <div className={cnIndexScreen('search-form-container')}>
                    <Button
                        type={'link'}
                        href={'https://yandex.ru/maps/?um=constructor%3A99a03e830dbc43f7971ad09d41155b94d25f215dfee6ad7b5e33ae381208bc01&source=constructorLink'}
                        variant={'outlined'}
                        target={'_blank'}
                    >
                        Показать на карте
                        <Image
                            src={PointIcon}
                            alt={'point'}
                            width={11}
                            height={14}
                        />
                    </Button>
                    <Button
                        type={'button'}
                        onClick={redirect}
                    >
                        Найти недвижимость
                    </Button>
                </div>
            </form>

        </section>
    );
};
