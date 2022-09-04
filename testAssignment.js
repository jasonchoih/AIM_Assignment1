const { generateString, generateNumbers } = require('./utils');
const { Assignment } = require('./myAssignment')
// 
const testPerformance = async() =>
{
    console.time();
    const tests = new Assignment(); 
    try {
        // Test Count Duplicate Elements
        // const _numbers = await generateNumbers(1010);
        // tests.countDuplicate(_numbers);
        // 
        // Test Character Reprogramming
        const _string = await generateString(10000);
        tests.getMaxDeletions(_string);
    } catch (error) {
        // console.log(error)
    }
    console.timeEnd();
}
// 
testPerformance();
