class Assignment { 
    // 1. Count Duplicate Elements
    countDuplicate = (numbers: number[]) : number  =>
    { 
        const arrLength = numbers.length;
        if(arrLength < 3 || arrLength > 1000) throw "Array length must be in the range between 3 and 1000";
        if(numbers.findIndex(v=>v==0||v>1000)!= -1) throw "Numbers in the array should be in the range between 1 and 1000";
        // 
        const obj = {};
        let counts = 0;
        for(let i in numbers){
            obj[numbers[i]] = (obj[numbers[i]] || 0) + 1;
        }
        for(let j in obj){
            if(obj[j]!= 1) counts++;
        }
        // console.log(counts)
        return counts;
    } 
    // 2. Character Reprogramming
    getMaxDeletions = (s: string): number =>
    {
        const sLength = s.length;
        if(sLength < 1 || sLength > 100000) throw "Array length must be in range between 1 and 100000";
        // 
        const whiteList = ['U','D','L','R'];
        const _s = Array.from(new Set(s.split('')));
        const is_same = (_s.length == whiteList.length) && _s.sort().every((element, index) => {
            return element === whiteList.sort()[index]; 
        });
        // 
        if(!is_same) throw "Only U, D, L, R are allowed!";
        // 
        const stepsObj = {};
        for(let i in whiteList){
            stepsObj[whiteList[i]] = 0
        }
        // 
        const steps = s.split('');
        for(let j in steps){
            stepsObj[steps[j]] = (stepsObj[steps[j]]) + 1
        }
        const stepsTaken = Math.abs(stepsObj['U'] - stepsObj['D']) + Math.abs(stepsObj['L'] - stepsObj['R']);
        // 
        // console.log(steps.length - stepsTaken)
        return steps.length - stepsTaken;
    }
}
// 
module.exports={
    Assignment
}