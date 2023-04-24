const firstFact = document.querySelector("#firstFact");
const secondFact = document.querySelector("#secondFact");
const thirdFact = document.querySelector("#thirdFact");


async function loadData(){
    let results;
    try{
        results = Promise.all([
            (await fetch("https://meowfacts.herokuapp.com/")).json(),
            (await fetch("https://meowfacts.herokuapp.com/")).json(),
            (await fetch("https://meowfacts.herokuapp.com/")).json()
        ]).then(responses=>{
            return responses;
        });
    } catch(err) {
        alert(err.message);
    }
    return results;
}


async function processData(){
    let answer = await loadData();
    let factOne = answer[0].data[0];
    let factTwo = answer[1].data[0];
    let factThree = answer[2].data[0];
    let factList = [factOne, factTwo, factThree];
    return factList;
}



async function printData(){
    let finalRes = await processData();
    firstFact.innerHTML = `${finalRes[0]}`;
    secondFact.innerHTML = `${finalRes[1]}`;
    thirdFact.innerHTML  = `${finalRes[2]}`;
}
