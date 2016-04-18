function luhn_validate(n){
    var l = /^[0-9]+$/.test(n)&&n.length, s = 0, b = 1;
    while (l)
        s += (b ^= 1) ? +[0, 2, 4, 6, 8, 1, 3, 5, 7, 9][+n[--l]] : +n[--l];
    return !!s && s % 10 === 0;
}
