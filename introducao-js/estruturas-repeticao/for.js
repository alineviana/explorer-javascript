// Estrutura de repetição 
// For


// Example 01

for (let i = 0; i <= 10; i++) {
    console.log(i);
};


// Example 02
// break - pára a execução do loop
for (let i = 100; i > 0; i--) {
    if(i === 50) {
        break;
    }

    console.log(i);
}


// Example 03
// continue - pula a execução do momento
for (let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }

    console.log(i);
}