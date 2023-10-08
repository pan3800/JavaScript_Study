function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인되었습니다.');
}

try {
    checkNumber(100);
} catch (e) {
    checkNumber('wrong type');
} finally {
    console.log("완료");
}



