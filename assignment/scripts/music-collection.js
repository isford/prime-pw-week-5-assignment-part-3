console.log('***** Music Collection *****')

let collection = []
function addToCollection( title, artist, yearPublished) {
  collection.push({title, artist, yearPublished});
  return {title, artist, yearPublished}
}

console.log( addToCollection('Money', 'Pink Floyd',
  1973));

console.log( addToCollection('Aerials', 'System of a Down',
  2001));

console.log( addToCollection('Immigrant Song', 'Led Zeppelin',
  1970));

console.log( addToCollection('The Real Slim Shady', 'Eminem',
  2000));

console.log( addToCollection('Run Away', 'Linkin Park',
  2000));

console.log( addToCollection('Down to the River', 'Brown Bird',
  2009));

console.log('The total collection array', collection);

function showCollection(){
return (title + 'by' + artist + 'published in' + yearPublished);
}

console.log(showCollection());
