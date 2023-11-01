const message1 =
	"In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance - rack, an old buckler, a lean hack, and a greyhound for coursing coursing.An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three - quarters of his income.";

const message2 = "a b a a b b b b b c c c c a c c";

const message3 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";

const message4 = " //wont won't won't";

const message5 = "   ";

const wordsCounter3 = function (message) {
	const cleanedMessage = message
		.toLowerCase()
		.replace(/\s+/g, " ")
		.replace(/[^\w\s' ]|_/g, "")
		.trim(); //makes the text lowercase and removes extra spaces and ascii characters

	if (cleanedMessage.length == 0) return [];
	console.log("cleanedMessage: ", cleanedMessage);

	const messageArray = cleanedMessage.split(" ").filter((w) => w !== "'"); //array of words splitted

	const messageSet = [...new Set(messageArray)]; //words without any repeats for faster navigation

	const numberOfWordsInOutput = messageSet.length > 2 ? 3 : messageSet.length; //sets the output length based on input length

	const sortedTextArray = messageArray.sort();

	let navigationStartIndex = 0;
	let result = [];
	let sum = 1;

	while (navigationStartIndex < sortedTextArray.length) {
		if (
			sortedTextArray[navigationStartIndex] !==
			sortedTextArray[navigationStartIndex + 1]
		) {
			result.push({
				word: sortedTextArray[navigationStartIndex],
				num: sum,
			});
			navigationStartIndex++;
			sum = 1;
			continue;
		}
		navigationStartIndex++;
		sum++;
	}

	result = result.sort((a, b) => b.num - a.num);

	const threeWords = result
		.slice(0, numberOfWordsInOutput)
		.map((obj) => obj.word);
	return threeWords;
};

const startTime = Date.now();

console.log(wordsCounter3(message1));
console.log(wordsCounter3(message2));
console.log(wordsCounter3(message3));
console.log(wordsCounter3(message4));
console.log(wordsCounter3(message5));

const endTime = Date.now();
console.log("opereation ended in", endTime - startTime, "ms");
