const arrayOfObj = [
  { id: 1, name: "A",addr:'abce' },
  { id: 2, name: "B",addr:'abce' },
  { id: 3, name: "C",addr:'abce' },
  { id: 4, name: "D",addr:'abce' },
  { id: 5, name: "E",addr:'abce' },
  { id: 6, name: "F",addr:'abce' },
  { id: 7, name: "G",addr:'abce' },
  { id: 8, name: "H",addr:'abce' },
  { id: 9, name: "I",addr:'abce' },
  { id: 10, name: "J",addr:'abce' },
];

// const mapAcrossId = arrayOfObj.reduce(
//   (prev, curr) => ({
//     ...prev,
//     [curr.id]: Object.entries(curr).reduce(
//       (iPrev, [iCurrKey, iCurrVal]) => ({
//         ...iPrev,
//         ...(!["id",'addr'].includes(iCurrKey) && { [iCurrKey]: iCurrVal }),
//       }),
//       {}
//     ),
//   }),
//   {}
// );

// console.log(mapAcrossId);

const mapId = arrayOfObj.reduce((prev , curr) => ({
    ...curr,
    ...prev
}))

console.log(mapId);