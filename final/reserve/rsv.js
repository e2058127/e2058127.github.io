function update_dep() {
    const dep1 = document.departure1.departure;
    const num = dep1.selectedIndex;
    const str = dep1.options[num].value;

    console.log(str);
    return str;

}

function update_arr() {
    const arr1 = document.arrival1.arrival;
    const num = arr1.selectedIndex;
    const str = arr1.options[num].value;

    console.log(str);
    return str;
}

function A() {
    var element = document.getElementById('targetTable');

    //出発地、出発時間、到着地、到着時間、Virtual Value、普通、株主優待
    var text = [
        ['関西', '07:05', '羽田', '08:15', '13,360', '24,510', '18,950', 'VAW102'],
        ['関西', '07:25', '羽田', '08:35', '13,360', '24,510', '18,950', 'VAW104'],
        ['関西', '09:30', '羽田', '10:40', '13,360', '24,510', '18,950', 'VAW106'],
        ['関西', '12:30', '羽田', '13:35', '13,360', '24,510', '18,950', 'VAW108'],
        ['関西', '15:20', '羽田', '16:40', '13,360', '24,510', '18,950', 'VAW110'],
        ['関西', '20:15', '羽田', '21:30', '13,360', '24,510', '18,950', 'VAW112'],
        ['関西', '11:10', '新千歳', '23:00', '13,360', '24,510', '18,950', 'VAW2000'],
        ['関西', '15:15', '新千歳', '16:15', '13,360', '24,510', '18,950', 'VAW2002'],
        ['羽田', '06:30', '関西', '07:35', '12,290', '23,140', '19,280', 'VAW103'],
        ['羽田', '08:30', '関西', '09:30', '12,290', '23,140', '19,280', 'VAW105'],
        ['羽田', '11:30', '関西', '12:35', '12,290', '23,140', '19,280', 'VAW107'],
        ['羽田', '16:30', '関西', '17:35', '12,290', '23,140', '19,280', 'VAW109'],
        ['羽田', '18:00', '関西', '19:05', '12,290', '23,140', '19,280', 'VAW111'],
        ['羽田', '09:00', '新千歳', '10:35', '15,120', '28,710', '19,180', 'VAW501'],
        ['羽田', '12:15', '新千歳', '15:40', '15,120', '28,710', '19,180', 'VAW503'],
        ['羽田', '16:00', '新千歳', '17:35', '15,120', '28,710', '19,180', 'VAW505'],
        ['新千歳', '08:00', '羽田', '09:35', '15,120', '28,710', '19,180', 'VAW502'],
        ['新千歳', '12:05', '羽田', '13:40', '15,120', '28,710', '19,180', 'VAW504'],
        ['新千歳', '17:05', '羽田', '18:40', '15,120', '28,710', '19,180', 'VAW506']
    ];

    var dict_plc = { 羽田: 0, 成田: 1, 新千歳: 2, 関西: 3 };
    var val_dep = update_dep();
    var val_arr = update_arr();

    for (var a = 0; a < 20; a++) {
        if (val_dep == dict_plc[text[a][0]] && val_arr == dict_plc[text[a][2]]) {
            var newRow = element.insertRow();
            if (a % 2 == 0) {
                newRow.id = 'row2';
            }


            newCell = newRow.insertCell();
            newCell.id = 'test';
            var newText = document.createTextNode(text[a][0] + '\r' + text[a][1] + '\r');
            newCell.appendChild(newText);
            console.log("added", newCell);

            newCell = newRow.insertCell();
            newCell.id = 'vect'
            var newText = document.createTextNode('→' + '\r' + text[a][7]);
            newCell.appendChild(newText);
            console.log("added", newCell);

            newCell = newRow.insertCell();
            newCell.id = 'test';
            var newText = document.createTextNode(text[a][2] + '\r' + text[a][3]);
            newCell.appendChild(newText);
            console.log("added", newCell);


            newCell = newRow.insertCell();
            newCell.id = 'fee';
            var href = document.createElement('a');
            href.href = '../index.html';
            href.textContent = text[a][5];
            newCell.appendChild(href);
            console.log("added", newCell);

            newCell = newRow.insertCell();
            newCell.id = 'fee';
            var href = document.createElement('a');
            href.href = '../index.html';
            href.textContent = text[a][4];
            newCell.appendChild(href);
            console.log("added", newCell);

            newCell = newRow.insertCell();
            newCell.id = 'fee';
            var href = document.createElement('a');
            href.href = '../index.html';
            href.textContent = text[a][6];
            newCell.appendChild(href);
            console.log("added", newCell);
        }
    }
}

function get_url_rsv() {
    //location.href = 'reserve/rsv.html?dep=' + update_dep() + '?arr=' + update_arr();
    //console.log(location.href);

    var target = document.getElementById('rsv');
    target.href = 'rsv.html?dep=' + update_dep() + '?arr=' + update_arr();
    return location.href;
}


var query = location.search;
var value = query.split('?');
var value1 = value[1].split('=');
var value2 = value[2].split('=');

console.log(decodeURIComponent(value[0]));
console.log(decodeURIComponent(value[1]));
console.log(decodeURIComponent(value[2]));
console.log(decodeURIComponent(value[3]));

console.log(decodeURIComponent(value1[0]));
console.log(decodeURIComponent(value1[1]));

var val_dep = decodeURIComponent(value1[1]);
var val_arr = decodeURIComponent(value2[1]);

console.log(decodeURIComponent(val_dep));
console.log(decodeURIComponent(val_arr));

var select_dep = document.getElementById('departure');
var select_arr = document.getElementById('arrival');

select_dep.options[val_dep].selected = true;
select_arr.options[val_arr].selected = true;

A();