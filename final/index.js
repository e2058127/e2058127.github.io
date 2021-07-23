function move() {
    var storage = sessionStorage;
    console.log('a');
}

function update_dep() {
    //selinBox = document.departure.selinBox;
    //console.log(selinBox);

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

function get_url_rsv() {
    //location.href = 'reserve/rsv.html?dep=' + update_dep() + '?arr=' + update_arr();
    //console.log(location.href);

    var target = document.getElementById('rsv');
    target.href = 'reserve/rsv.html?dep=' + update_dep() + '?arr=' + update_arr();
    return location.href;
}


update_dep();
update_arr();