// function passwordGenerator (input) {
//   const n = Number(input[0])
//   const l = Number(input[1])
//   let solution = ''

//   for (let s1 = 1; s1 <= n; s1++) {
//     for (let s2 = 1; s2 <= n; s2++) {
//       for (let s3ascii = 97; s3ascii < 97 + l; s3ascii++) {
//         let s3 = String.fromCharCode(s3ascii)
//         for (let s4ascii = 97; s4ascii < 97 + l; s4ascii++) {
//           let s4 = String.fromCharCode(s4ascii)
//           for (let s5 = Math.max(s1, s2) + 1; s5 <= n; s5++) {
//             solution += `${s1}${s2}${s3}${s4}${s5} `
//           }
//         }
//       }
//     }
//   }
//   return solution
// }

// let input = [2, 4]
// console.log(passwordGenerator(input))

function magicNumber (input) {
  const magicNum = Number(input);

  let solution = '';

  for (let d1 = 1; d1 < 10; d1++) {
    for (let d2 = 1; d2 < 10; d2++) {
      for (let d3 = 1; d3 < 10; d3++) {
        for (let d4 = 1; d4 < 10; d4++) {
          for (let d5 = 1; d5 < 10; d5++) {
            for (let d6 = 1; d6 < 10; d6++) {
              if (d1 * d2 * d3 * d4 * d5 * d6 === magicNum) {
                solution = solution.concat(d1, d2, d3, d4, d5, d6, ' ');
              }
            }
          }
        }
      }
    }
  }
  return solution;
}

console.log(magicNumber(531441))
