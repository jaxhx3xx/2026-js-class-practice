/**
 *
 * @param {*} productPrice
 * @returns
 */
function taxAmount(productPrice) {
    const tax = 0.1;
    return productPrice * tax;
}
/**
 *
 * @returns
 */
function getTop5() {
    return ["정재희", 2, 3, 4, 5];
}
/**
 * 며칠 전 후 날짜 구하는 함수
 * @param {*} day : 전 => 음수, 후 => 양수
 *
 */
const nDaysAgoFunc = (day) => {
    let nowmilliSec = now.getTime();
    let oneDay = 24 * 60 * 60 * 1000;
    nDaysAgo = new Date(nowmilliSec + oneDay * day);
    console.log(nDaysAgo);
};

const nDaysAgoFunc2 = (day, format) => {
    let date = new Date();
    let nowmilliSec = date.getTime();
    let oneDay = 24 * 60 * 60 * 1000;

    let nDaysAgo = new Date(nowmilliSec + day * oneDay);
    let check = format.split("-");
    let year = nDaysAgo.getFullYear().toString();
    let month = String(nDaysAgo.getMonth() + 1).padStart(2, 0);
    let dayNum = String(nDaysAgo.getDate()).padStart(2, "0");

    if (check[0] === "YY") {
        year = year.slice(2);
    }
    console.log(`${year}-${month}-${dayNum}`);
};
const nDaysAgoFunc3 = (day, format) => {
    let date = new Date();
    let nowmilliSec = date.getTime();
    let oneDay = 24 * 60 * 60 * 1000;

    let nDaysAgo = new Date(nowmilliSec + day * oneDay);
    let check = format.slice(4, 5);
    let year = nDaysAgo.getFullYear();
    let month = nDaysAgo.getMonth() + 1;
    let dayNum = nDaysAgo.getDate();

    console.log(`${year}${check}${month}${check}${dayNum}`);
};
