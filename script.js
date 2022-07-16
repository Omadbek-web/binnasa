let numbers = [120, 500, 650, 950, 1200, 410, 330, 260]

// bittasi shartni bajarsa true qaytaradi
let x = numbers.some(x => x > 30)

// hammasi shartni bajarsa true qaytaradi
// let x = numbers.every(x => x > 0 )

// let x = numbers.filter(x => {
//     return x > 300 && x < 700
// })

numbers.forEach(x => {
    console.log(x)  
})

console.log(x)