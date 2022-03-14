const judgeVegetable = function (vegetables, metric) {
  let champ = "";
  let metricVar = 0
  for (let i = 0 ; i <= vegetables.length - 1; i++) {
    if (vegetables[i][metric] > metricVar) {
      metricVar = vegetables[i][metric];
      champ = vegetables[i].submitter;
    }
  }
  return champ;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));