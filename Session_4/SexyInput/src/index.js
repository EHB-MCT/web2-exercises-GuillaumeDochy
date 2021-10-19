import Cleave from 'cleave.js'

var cleave = new Cleave('.demoinput', {
    delimiters: ['.', '.', '-', '.'],
    blocks: [2, 2, 2, 3, 2],
});



var cleave = new Cleave('.prefix', {
    prefix: 'STUDENT-',
});

var cleave = new Cleave('.date', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y']
});

var cleave = new Cleave('.age', {
    numeral: true,
    numeralPositiveOnly: true
});

var cleave = new Cleave('.phone', {
    phone: true,
    phoneRegionCode: 'be'
});