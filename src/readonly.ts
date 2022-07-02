export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('yau');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'Yau-san'; // readonlyなのでエラーになる
myVisaCard.owner = 'Yau-san';
