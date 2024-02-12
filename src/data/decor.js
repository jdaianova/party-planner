import balloons from '../data/img/decor/decor-balloons.webp';
import cake from '../data/img/decor/decor-cake.webp';
import dishes from '../data/img/decor/decor-dishes.webp';
import flags from '../data/img/decor/decor-flags.webp';
import girlands from '../data/img/decor/decor-girlands.webp';
import gun from '../data/img/decor/decor-gun.webp';
import muffins from '../data/img/decor/decor-muffins.webp';
import pizza from '../data/img/decor/decor-pizza.webp';
import sweets from '../data/img/decor/decor-sweets.webp';
import photo from '../data/img/decor/decor-photo.webp';

const decor = [
    {
        id: '1',
        name: 'воздушные шары',
        pic: balloons,
        price: 50,
    },
    {
        id: '2',
        name: 'Сладкий стол',
        pic: sweets,
        price: 5000,
    },
    {
        id: '3',
        name: 'Набор флажков',
        pic: flags,
        price: 100,
    },
    {
        id: '4',
        name: 'гирлянды',
        pic: girlands,
        price: 100,
    },
    {
        id: '5',
        name: 'Конфетти-пушка',
        pic: gun,
        price: 3000,
    },
    {
        id: '6',
        name: 'Тематическая посуда',
        pic: dishes,
        price: 150,
    },
    {
        id: '7',
        name: 'Фото уголок',
        pic: photo,
        price: 4000,
    },
    {
        id: '8',
        name: 'Торт на заказ',
        pic: cake,
        price: 8000,
    },
    {
        id: '9',
        name: 'Мини-пиццы',
        pic: pizza,
        price: 200,
    },
    {
        id: '10',
        name: 'Фруктовые капкейки',
        pic: muffins,
        price: 250,
    }
];

export default decor;
