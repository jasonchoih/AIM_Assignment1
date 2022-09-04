const generateNumbers = async(length) => 
{
    return Array(length).fill().map(() => Math.round(Math.random() * 1000))
}
// 
const generateString = async(length) => 
{
    const characters = 'UDLR';
    // 
    let result;
    const charactersLength = characters.length;
    for(let i=0;i<length;i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
// 
module.exports={
    generateNumbers,
    generateString
}