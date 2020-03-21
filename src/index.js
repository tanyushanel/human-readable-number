module.exports = function toReadable(number) {
    if (number === 0)
        return 'zero';

    // split numb on 3-numbers
    let threeNumbersArray = [];
    for (let i = 1000000000000; i >= 1; i = i / 1000) {
        // 211 342 981 712
        let tr = Math.floor(number / i);
        let ost = number % i;
        number = ost;
        threeNumbersArray.push(tr);
    }

    let output = '';
    for (let i = 0; i < threeNumbersArray.length; i++) {
        let threeNumbers = threeNumbersArray[i];

        if (threeNumbers === 0) // avoid 000 to text output
            continue;

        output += threeNumbersToText(threeNumbers);

        // define thusands or million
        let thousandPosition = threeNumbersArray.length - i;
        switch (thousandPosition) {
            case 1:
                output += '';
                break;
            case 2:
                output += 'thousand ';
                break;
            case 3:
                output += 'million ';
                break;
            case 4:
                output += 'billion ';
                break;
            case 5:
                output += 'trillion ';
                break;
            default:
                output = 'Too large number! '
                break;
        }
    }

    return output.trim();



    function threeNumbersToText(threeNumb) {
        // split 712 ==> [7, 12] ==> X hundred XX
        // 001 ==> [0, 01]

        let splitArray = [Math.floor(threeNumb / 100), threeNumb % 100]; // get full hundred & rest

        let output = '';

        if (splitArray[0] !== 0) {
            let hundred = onesToText(splitArray[0]);
            output = hundred + 'hundred ';
        }

        let tens = splitArray[1];
        output += tensToText(tens);

        return output;
    }

    function tensToText(teensNumb) {
        let output = '';
        // 10 - 19
        if (teensNumb >= 10 && teensNumb <= 19) {
            switch (teensNumb) {
                case 10:
                    output += 'ten ';
                    break;
                case 11:
                    output += 'eleven ';
                    break;
                case 12:
                    output += 'twelve ';
                    break;
                case 13:
                    output += 'thirteen ';
                    break;
                case 14:
                    output += 'fourteen ';
                    break;
                case 15:
                    output += 'fifteen ';
                    break;
                case 16:
                    output += 'sixteen ';
                    break;
                case 17:
                    output += 'seventeen ';
                    break;
                case 18:
                    output += 'eighteen ';
                    break;
                case 19:
                    output += 'nineteen';
                    break;
                default:
                    break;
            }
        } else if (teensNumb >= 1 && teensNumb <= 9) {
            output += onesToText(teensNumb);
        } else if (teensNumb >= 20 && teensNumb <= 99) {

            // --- TENS -----
            let splitOnes = [Math.floor(teensNumb / 10), teensNumb % 10];
            switch (splitOnes[0]) {
                case 2:
                    output += 'twenty ';
                    break;
                case 3:
                    output += 'thirty ';
                    break;
                case 4:
                    output += 'forty ';
                    break;
                case 5:
                    output += 'fifty ';
                    break;
                case 6:
                    output += 'sixty ';
                    break;
                case 7:
                    output += 'seventy ';
                    break;
                case 8:
                    output += 'eighty ';
                    break;
                case 9:
                    output += 'ninety ';
                    break;
                default:
                    break;
            }

            // ------ ONES -----
            output += onesToText(splitOnes[1]);
        }
        return output;
    }

    function onesToText(onesNumb) {
        let output = '';
        switch (onesNumb) {
            case 1:
                output += 'one';
                break;
            case 2:
                output += 'two';
                break;
            case 3:
                output += 'three';
                break;
            case 4:
                output += 'four';
                break;
            case 5:
                output += 'five';
                break;
            case 6:
                output += 'six';
                break;
            case 7:
                output += 'seven';
                break;
            case 8:
                output += 'eight';
                break;
            case 9:
                output += 'nine';
                break;
            default:
                break;
        }
        return output + ' ';
    }
}