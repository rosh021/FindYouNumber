

for (let num = 2; num <= 10; num++) {
  console.log(
    `---------------------Multiplication of ${num}---------------------`
  );
  console.log(
    "==========================================================================="
  );

  for (let multi = 1; multi <= 10; multi++) {
    result = num * multi;

    console.log(`${num} * ${multi} = ${result}`);
  }
}
console.log();