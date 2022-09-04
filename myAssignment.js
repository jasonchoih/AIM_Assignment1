var Assignment = /** @class */ (function () {
    function Assignment() {
        // 1. Count Duplicate Elements
        this.countDuplicate = function (numbers) {
            var arrLength = numbers.length;
            if (arrLength < 3 || arrLength > 1000)
                throw "Array length must be in the range between 3 and 1000";
            if (numbers.findIndex(function (v) { return v == 0 || v > 1000; }) != -1)
                throw "Numbers in the array should be in the range between 1 and 1000";
            // 
            var obj = {};
            var counts = 0;
            for (var i in numbers) {
                obj[numbers[i]] = (obj[numbers[i]] || 0) + 1;
            }
            for (var j in obj) {
                if (obj[j] != 1)
                    counts++;
            }
            // console.log(counts)
            return counts;
        };
        // 2. Character Reprogramming
        this.getMaxDeletions = function (s) {
            var sLength = s.length;
            if (sLength < 1 || sLength > 100000)
                throw "Array length must be in range between 1 and 100000";
            // 
            var whiteList = ['U', 'D', 'L', 'R'];
            var _s = Array.from(new Set(s.split('')));
            var is_same = (_s.length == whiteList.length) && _s.sort().every(function (element, index) {
                return element === whiteList.sort()[index];
            });
            // 
            if (!is_same)
                throw "Only U, D, L, R are allowed!";
            // 
            var stepsObj = {};
            for (var i in whiteList) {
                stepsObj[whiteList[i]] = 0;
            }
            // 
            var steps = s.split('');
            for (var j in steps) {
                stepsObj[steps[j]] = (stepsObj[steps[j]]) + 1;
            }
            var stepsTaken = Math.abs(stepsObj['U'] - stepsObj['D']) + Math.abs(stepsObj['L'] - stepsObj['R']);
            // 
            // console.log(steps.length - stepsTaken)
            return steps.length - stepsTaken;
        };
    }
    return Assignment;
}());
// 
module.exports = {
    Assignment: Assignment
};
