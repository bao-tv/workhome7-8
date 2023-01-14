let str = [];
function main() {
    str.push(+document.getElementById('num').value);
    document.getElementById('result').innerHTML = (str);
}
// tổng số dương
function ex1() {
    let sumArry = str.reduce((total, value, index) => {
        if(value > 0) total += value;
        return total;
    }, 0);
    document.getElementById('resultEx1').innerHTML = ('Tổng các số dương: '+sumArry);
}

// đếm số dương
function ex2() {
    let numPositive = str.reduce((numP, value, index) => {
        if(value > 0) numP++;
        return numP;
    }, 0);
    document.getElementById('resultEx2').innerHTML = ('Số dương: '+numPositive);
}

// số nhỏ nhất
function minArray(array) {
    let min =array.reduce((min, value) => {
        return (min < value) ? min : value;
    });
    return min;
};

function ex3() {
    document.getElementById('resultEx3').innerHTML = ('Số nhỏ nhất: '+ minArray(str));
}


// số dương nhỏ nhất

function ex4() {
    let aray_Pos = str.filter((value,index) => value > 0)
    if (aray_Pos.length == 0) document.getElementById('resultEx4').innerHTML = 'Mảng không có số dương.';
    else document.getElementById('resultEx4').innerHTML = 'Số dương nhỏ nhất: ' + minArray(aray_Pos);
}


// số chẳn cuối cùng
function ex5() {
    let aray_Even = str.filter((value,index) => value % 2 == 0)
    if (aray_Even.length == 0 ) document.getElementById('resultEx4').innerHTML = 'Mảng không có số chẳn.';
    else document.getElementById('resultEx5').innerHTML = 'Số chẳn cuối cùng: ' + aray_Even[aray_Even.length - 1];
}

// đổi chỗ

function ex6() {
    let a = +document.getElementById('numA').value;
    let b = +document.getElementById('numB').value;
    let tam;
    // xét đk a,b
    if (a<0 || b<0 || !Number.isInteger(a) || !Number.isInteger(b) || a>= str.length || b>= str.length) {
        return document.getElementById('resultEx6').innerHTML = 'Bạn nhập sai các vị trí';
    } 
    else {
        tam = str[a];
        str[a] = str[b];
        str[b] = tam;
    }
    document.getElementById('resultEx6').innerHTML = 'Mảng sau khi đổi chỗ: ' + str;
}

// sắp xếp tăng dần

function ex7() {
    str.sort(function(a,b) {
        return a - b;
    });
    document.getElementById('resultEx7').innerHTML = 'Mảng sau khi sắp xếp tăng dần: ' + str; 
}

// tìm số nguyên tố đầu tiên

function soNT(n) {
    if (Number.isInteger(n) && n > 0) {
        if(n<2) return false ;
        if(n==2) return true;
        if(n%2 ==0) return false;
        for (let i = 3; i <= Math.sqrt(n); i +=2) {
            if (n%i == 0) return false;
        }
        return true;
    } else return false
};

// số nhỏ nhất
function minArray(array) {
    let min =array.reduce((min, value) => {
        return (min < value) ? min : value;
    });
    return min;
};

function ex8() {
    let firstNT;
    for (let i = 0; i < str.length; i++) {
        if (soNT(str[i])) {
            firstNT = 'Số nguyên tố đầu tiên: '+ str[i];
            break;
        } 
        else firstNT = 'Mảng không có số Nguyên tố';
    }
    document.getElementById('resultEx8').innerHTML = firstNT; 
};

// đếm số nguyên

let str2 = [];
function ex9A() {
    str2.push(+document.getElementById('num2').value);
    document.getElementById('resultEx9A').innerHTML = (str2);
};

function ex9B() {
    let integer = str2.reduce((integer, value) => {
        if(Number.isInteger(value)) integer ++;
        return integer;
    },0 );
    document.getElementById('resultEx9B').innerHTML = 'Số nguyên: ' + integer; 
};


// so sánh số dương và số âm
function ex10() {
    let negative = 0;
    let positive = 0;
    let result10 = '';
    for (let i = 0; i < str.length; i++) {
        if(str[i] > 0) positive++;
        if(str[i] < 0) negative++;
    }
    if (positive > negative) {
        result10 = 'Số dương > số âm';
    }
    else if (positive < negative) {
        result10 = 'Số dương < số âm';
    }
    else { 
        result10 = 'Số dương = số âm';
    }
    document.getElementById('resultEx10').innerHTML = result10; 
}





