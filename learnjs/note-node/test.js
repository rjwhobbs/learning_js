const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(function (word) {
	if (word.length > 6) {
		return word;
	}
});

const words2 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result2 = words2.filter(word => word.length > 6);

console.log(result);

console.log(result2);