const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}
console.log(rows.join("\n"));

/*
let i = 1;
while (i <= count) {
    rows.push(padRow(i, count));
    i++;
}
*/
// The while loop is redundant since the for loop already fills the array
// You can remove the while loop entirely as it does the same thing
