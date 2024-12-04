// Nomor 1

function getTask(task){
    return `task hari ini  jam ${task.jam} kamu ${task.kegiatan}`;
}

const diallyTask = [{
    jam : 1,
    kegiatan : "tidur",
},{
    jam : 5,
    kegiatan : "solat subuh"
},{
    jam : 8,
    kegiatan : "kuliah"
}
]

console.log(getTask(diallyTask[1]));



// Nomor 2 
function sumOfNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}


/*
untuk function di atas merupakan fungsi iterasi menggunkana return,
(...numbers) adalah cara untuk menangkap semua masukan entah berapa pun panjang nya.
lalu di pecah menjadi (total dan number ), total berarti angka hasil dan number angka iterator.
return mengembalikan ketika numbers habis. 

bisa juga di tulis menggunakan function berikut 
*/

function sumOfNumbersv2(...numbers){
    let result = 0;
    for (const number of numbers){
        result += number;
    }
    return  result;
}

const result = sumOfNumbersv2(100, 2, 3, 4, 5);
console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result}`);