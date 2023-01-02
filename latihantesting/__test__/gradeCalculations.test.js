// Penulisan unit test untuk fungsi averageExams()
//=================================================

// Single test case -------------------------
    // Impor variabel pada file gradeCalculations.js
// const {averageExams} = require("../gradeCalculations");

// test("it should return exact average.", () => {
//     const listValueOfExams = [80, 100, 100, 80];
//     expect(averageExams(listValueOfExams)).toEqual(90);
// });

// Multiple test case ---------------------------
    // Import kedua variabel pada file JS gradeCalculations
const {averageExams, isStudentPassExam} = require("../gradeCalculations");

describe('Grade Calculations', () => {
    test("it should return exact average.", () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    })

        // Integrated testing
    test("it should return exam passed status.", () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(true);
    })

    test("it should return exam failed status.", () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(false);
    })
});