import { v4 as uuidv4 } from 'uuid';

var PINS_NUMBER = 8;

var comfort = [
    'hdmi',
    'wifi',
    'usb',
    'bluetooth',
];

var photos = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

var getRandomInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomArr = function (arr) {
    var length = getRandomInRange(0, arr.length);
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(arr[i]);
    }
    return result;
};

var createAdvertsData = function (count) {
    var pinsArray = [];

    for (var i = 0; i < count; i++) {
        var advert = {
            id: uuidv4(),
            title: 'Наименование товара',
            price: '10 000',
            features: getRandomArr(comfort),
            description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.',
            photos: getRandomArr(photos),

        };
        pinsArray.push(advert);
    }
    return pinsArray;
};
export var adverts = createAdvertsData(PINS_NUMBER);



