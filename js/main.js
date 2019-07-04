
window.onload = function(){

fetch('https://swapi.co/api/people') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  let people = json.results; 

  for(p of people) {
    let listItem = document.createElement('li'); 
    listItem.innerHTML = 
    	'<p>'+ 'Name:' + p.name + '</p>' +
    	'<p>'+ 'Gender:' + p.gender + '</p>' +
    	'<p>'+ 'Birthday:' + p.birth_year + '</p>' +
    	'<p>'+ 'Eye Color:' + p.eye_color + '</p>' +
    	'<p>'+ 'Hair Color:' + p.hair_color + '</p>' +
    	'<p>'+ 'Height:' + p.height + '</p>' +
    	'<p>'+ 'Skin Color:' + p.skin_color + '</p>'; 
    document.body.appendChild(listItem);  
  }

});

fetch('https://swapi.co/api/films') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  let films = json.results; 

  for(f of films) {
    let listItem = document.createElement('li'); 
    listItem.innerHTML = 
    	'<p>'+ 'Name:' + f.title + '</p>' +
    	'<p>'+ 'Gender:' + f.director + '</p>' +
    	'<p>'+ 'Birthday:' + f.producer + '</p>' +
    	'<p>'+ 'Eye Color:' + f.release_date + '</p>'; 
    document.body.appendChild(listItem);  
  }

});
};