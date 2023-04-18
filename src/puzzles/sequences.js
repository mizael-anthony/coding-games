// 11011101111, 01010, 1101101, 01110100110011000101001100011110010010101011111011
const b = '01010';

let cur = 0, pre = 0, max = 0;

for (let i = 0; i < b.length; i++) {

    if (b[i] === '1') {
        cur++;
    }
    else {
        pre = (b[i + 1] === '1') ? cur : 0;
        cur = 0;
    }
    max = Math.max(pre + cur, max);
}

console.log(max + 1);





