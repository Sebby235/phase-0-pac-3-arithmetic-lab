function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function increment (a) {
    return a + 1;
}
function decrement (a) {
    return a - 1;
}
function makeInt(a) {
    return parseInt(a, 10);
}
function preserveDecimal(a) {
    return parseFloat("a.534");
}
function preserveDecimal(a) {
    const parsed = parseFloat(a)
    return isNaN(parsed) ? NaN : parsed
}
