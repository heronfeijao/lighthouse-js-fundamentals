function smartGarbage(trash, bins) {
  bins[trash] += 1;
  return console.log(bins);
}

smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 });
smartGarbage('recycling', { waste: 1, recycling: 4, compost: 3 });
smartGarbage('compost', { waste: 2, recycling: 3, compost: 2 });