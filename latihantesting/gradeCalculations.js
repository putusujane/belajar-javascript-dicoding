// Fungsi Menghitung rata2 nilai siswa dari sebuah inputan berupa...
// ...daftar angka dalam bentuk array.
const averageExams = (valuesExam) => {
    const numberValidation = valuesExam.every((exam) => typeof exam === "number");
    if (!numberValidation) throw Error("Please input number!");

    const sumValues = valuesExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sumValues / valuesExam.length;
};

// Fungsi Melakukan kalkulasi apakah siswa lulus ujian atau tidak berdasarkan...
// ...nilai rata2 yang didapatkan (tergantung fungsi averageExams() diatas)
const isStudentPassExam = (valuesExam, name) => {
    const minValues = 75;
    const average = averageExams(valuesExam);

    if (average > minValues) {
        console.log(`${name} pass the exams!`);
        return true;

    } else {
        console.log(`${name} fail the exams!`);
        return false;
    }
};

module.exports = {averageExams, isStudentPassExam};

class Car {}

const car = new Car()
console.log(typeof Car);