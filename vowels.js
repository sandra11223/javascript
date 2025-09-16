let message = "  Coding is FUN when you practice consistently!  ";
let vowels=['a','e','i','o','u','U'];
let count=0;
for (let char of message) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(count);
    


