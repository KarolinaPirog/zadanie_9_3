var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
var newtext = text.replace('Velociraptor', dinosaurUpperCase);

console.log(newtext.slice(0, newtext.length/2));

