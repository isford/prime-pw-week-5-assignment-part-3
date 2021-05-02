console.log('***** Music Collection *****')

let collection = []
function addToCollection( title, artist, yearPublished) {
  collection.push({title, artist, yearPublished});//adds music to collection array
  return {title, artist, yearPublished}//returns input
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


function showCollection(array){
  for (i = 0; i < array.length; i++){
    console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}.`);
  }
}
showCollection(collection)

function findByArtist(artist){
  let artistArray = [];
  for (let i = 0; i < collection.length; i++){
    if(artist === collection[i].artist){
      artistArray.push(collection[i]);
    }
    return artistArray;
  }
}

console.log(findByArtist('Pink Floyd'));
console.log(findByArtist('JavaScript'));


function search(searchTerm){
  let searchTermArray = [];
  for (let i=0; i < collection.length; i++)
  if (collection[i].title === searchTerm || collection[i].artist === searchTerm || collection[i].yearPublished === searchTerm){
    searchTermArray.push(collection[i]);
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}.`);
    }
    else {
      console.log(searchTermArray);
    }
    return searchTermArray;
}
search('Pink Floyd')
search('Brown Bird')
search(2001)
search('The Beatles')
