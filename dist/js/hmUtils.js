let arrNum = [];
let question = +prompt(`Сколько студентов сгенерировать?`);
let students = studentsMock.getStudentList(question);


function HM7() {
    let firstQuestion = prompt(`Сколько чисел сгенерировать?`);
    let secondQuestion = prompt(`Числа от:`);
    let thirdQuestion = prompt(`Числа до:`);

    for (let i = 0; i < firstQuestion; i++) {
        arrNum = getRandomIntInclusive(1, 100);
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        for (let i = 0; i < firstQuestion; i++) {
            arrNum[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return arrNum;
    }

    function filterRange(arrNum, start, finish) {
        return arrNum.filter(element => (start <= element && element <= finish))

    }

    let filtered = filterRange(arrNum, secondQuestion, thirdQuestion);

    console.log(filtered);

    console.log(arrNum);
}



function HM8(students) {
    console.log(students.map(item => item.name));
}


function HM9() {
    let numInArray = [];

    students.forEach((onlyMarks) => {
        numInArray.push(onlyMarks.marks);
    })

    const numInOneArray = numInArray.reduce((total, amount) => {
        return total.concat(amount);
    }, []);

    console.log(numInOneArray);

    function sum(numInOneArray) {
        let sum = 0;
        for (i = 0; i < numInOneArray.length; i++) {
            sum += numInOneArray[i]
        }
        return sum
    }
    console.log(sum(numInOneArray));


    function averageMark(numInOneArray) {
        let sum = 0;
        for (i = 0; i < numInOneArray.length; i++) {
            sum += numInOneArray[i]
        }


        let average = sum / numInOneArray.length;


        return Math.floor(average);
    }
    console.log(averageMark(numInOneArray));
}

function HM10(f) {
    if (f <= 1) return f;
    return HM10(f - 1) + HM10(f - 2);
}

