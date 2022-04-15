export function lowerThen(num1: string, num2: string) {
  const lowestLength = Math.min(num1.length, num2.length);

  const num1DotIndex = num1.split('').findIndex(ch => ch === '.');
  const num2DotIndex = num2.split('').findIndex(ch => ch === '.');

  if (num1DotIndex !== num2DotIndex) {
    return num1DotIndex < num2DotIndex;
  }

  for (let indx = 0; indx < lowestLength; indx++) {
    if (num1[indx] === '.') {
      continue;
    }

    const num1N = +num1[indx];
    const num2N = +num2[indx];

    if (num1N !== num2N) {
      return num1N < num2N;
    }
  }

  return num1.length < num2.length;
}
