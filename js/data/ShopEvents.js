/**
 *  Константы для настройки магазинов
 */
var ShopEventConstants = {
    SHOP_DISTANCE_MIN: 100,   // минимальное расстояние между магазинами
    SHOP_PROBABILITY: 0.5,   // шанс встретить магазин или караван в день
    SHOP_NO_MONEY_MESSAGE: 'Не хватает денег!',   // сообщение о нехватке денег
    SHOP_BUY_MESSAGE: 'Получено: ',   // сообщение о нехватке денег
};

//  описания возможных магазинов
var Shops = [{
    text: 'Вы нашли магазин в этой жуткой пустоши',
    products: [
        {item: 'food', text: 'Еда', qty: 20, price: 50},
        {item: 'oxen', text: 'Брамины', qty: 1, price: 200},
        {item: 'firepower', text: 'Оружие', qty: 2, price: 50},
    ]
},
    {
        text: 'Вы встретили другой караван!',
        products: [
            {item: 'food', text: 'Еда', qty: 30, price: 50},
            {item: 'oxen', text: 'Брамины',qty: 1, price: 200},
            {item: 'firepower', text: 'Оружие',qty: 2, price: 20},
            {item: 'crew', text: 'Наемники',qty: 1, price: 200}
        ]
    },
    {
        text: 'Следопыты встретили контрабандистов',
        products: [
            {item: 'food', text: 'Еда', qty: 20, price: 60},
            {item: 'oxen', text: 'Брамины', qty: 1, price: 300},
            {item: 'firepower', text: 'Оружие', qty: 2, price: 80},
            {item: 'crew', text: 'Наемники', qty: 1, price: 300}
        ]
    },
];