import fairies from './img/fairies.webp';
import farm from './img/farm.webp';
import space from './img/space.webp';
import pirats from './img/pirats.webp';
import jungles from './img/jungles.webp';
import paleontologies from './img/paleontologies.webp';
import superheroes from './img/superheroes.webp';
import underwater from './img/underwater.webp';

const activities = [
    {
        id: 1,
        category: ["all", "Приключения"],
        pic: pirats,
        alt: "дети пиратская вечеринка",
        title: "Пиратская вечеринка",
        description: "Отправляйтесь в захватывающее путешествие за сокровищами.",
        price: 500,
    },
    {
        id: 2,
        category: ["all","Приключения", "исследования"],
        pic: space,
        alt: "дети космическое приключение",
        title: "Космическое приключение",
        description: "Исследуйте далекие галактики и встречайте новые миры.",
        price: 650,
    },
    {
        id: 3,
        category: ["all","Фантазия"],
        pic: superheroes,
        alt: "дети вечеринка супергерои",
        title: "Супергеройская вечеринка",
        description: "Станьте супергероем и спасите мир от злодеев.",
        price: 500,
    },
    {
        id: 4,
        category: ["all","Приключения"],
        pic: jungles,
        alt: "дети приключения в джунглях",
        title: "Джунгли и приключения",
        description: "Откройте для себя тайны загадочного мира джунглей.",
        price: 500,
    },
    {
        id: 5,
        category: ["all","исследования"],
        pic: farm,
        alt: "детская вечеринка на ферме",
        title: "Вечеринка на ферме",
        description: "Узнайте о жизни на ферме и о различных домашних животных.",
        price: 550,
    },
    {
        id: 6,
        category: ["all","Фантазия"],
        pic: fairies,
        alt: "вечеринка волшебные феи и эльфы",
        title: "Волшебные феи и эльфы",
        description: "Магический мир, где каждый может стать феей или эльфом.",
        price: 450,
    },
    {
        id: 7,
        category: ["all","Фантазия", "исследования"],
        pic: paleontologies,
        alt: "дети динозавры и палеонтологи",
        title: "Динозавры и палеонтологи",
        description: "Отправьтесь назад во времени к динозаврам и их тайнам.",
        price: 800,
    },
    {
        id: 8,
        category: ["all","Приключения"],
        pic: underwater,
        alt: "детское подводное королевство",
        title: "Подводное королевство",
        description: "Погрузитесь в глубины моря и исследуйте подводный мир.",
        price: 700,
    },
];

export default activities;
