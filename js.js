
let age = prompt('من فضلك أكتب عمرك لحسابة بالأيام والساعات');

function days(day) {
    let result = age * 365.25;
    document.write(`عمرك بالأيام هو : ${result} يوم`);
    return result;
}
days();
