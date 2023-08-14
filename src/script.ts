function getRandomCoffee (magicNum: number) {
  const coffeeList = [{ name: 'Espresso' }, { name: 'Americano' }, { name: 'Latte' },];
  return coffeeList[magicNum % coffeeList.length];
}
document.querySelector('button')?.addEventListener('click', () => {
  const seedNum = Math.floor(Math.random() * 2000);
  const coffee = 'Coffee ' + getRandomCoffee(seedNum).name;
  const price = seedNum % 100 + ' Euro';
  const endingText = 'It is expensive.';

  const text = `The ${coffee} costs ${price}. ${endingText}`;
  (document.querySelector('p') as HTMLParagraphElement).innerText = text;
  console.log([coffee, price, text].join(' - '));
});

