// References: stackoverflow.com

"use strict";

function numToWords (number) {
	
	var string = number.toString(), units, units2, units3, start, end, chunks, chunksLen, chunk, ints, i, word, words;
	// If number is zero
	if (parseInt(string) === 0){
		return "zero";
	}
	// If number is greater than 1 million return error
	if (parseInt(string) > 1000000){
		return "Error! Number is higher than 1 million!"
	}
	
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
			'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    units2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    units3 = ['', 'thousand', 'million'];
	
	start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }
	
	chunksLen = chunks.length;
	words = [];
    for( i = 0; i < chunksLen; i++ ) {

        chunk = parseInt(chunks[i]);

        if(chunk) {

            // Splits the chunk into individual numbers
            ints = chunks[i].split('').reverse().map(parseFloat);

            // If tens integer is 1 (e.g. 10), add 10 to the integer
            if(ints[1] === 1) {
                ints[0] += 10;
            }

            // Add units3 word if chunk is not zero and array item exists 
            if((word = units3[i])) {
                words.push(word);
            }

            // Add the unit if array item exists
            if((word = units[ints[0]])) {
                words.push(word);
            }

            // Add the tens if array item exists
            if((word = units2[ints[1]])) {
                words.push(word);
            }

            // Add hundreds if array item exists
            if((word = units[ints[2]])) {
                words.push(word+' hundred');
            }

        }

    }

    return words.reverse().join(' ');

}

function wordstoCurrency (number) {
	
	
}
