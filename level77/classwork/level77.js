function add(a, b) {
    
    return a + b;
}

function multiply(a, b) {
    
    return a * b;
}


async function delayedResult() {
  
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(3); 
        }, 1000);
    });
}


console.log("შეკრება:", add(5, 3)); 
console.log("გამრავლება:", multiply(5, 3)); 


delayedResult().then(result => {
    console.log("ასინქრონული შედეგი:", result);
}).catch(error => {
    console.error("შეცდომა:", error); 
});