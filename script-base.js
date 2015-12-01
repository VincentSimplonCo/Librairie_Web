function byId(element){
  if( typeof element != 'string'){
      console.log('Erreur : byId doit être une chaîne de caractère');
  }
  return document.getElementById(element);
}


// raccourci pour document.getElementsByClassName( ... )
// le 2nd paramètre est facultatif :
// -si il est fourni on renvoi l'item à la position demandé
// -sinon on renvoie le tableau complet

function byClass(className, atIndex){
  var elements = document.getElementsByClassName(className);
  var tElements = Array.prototype.slice.call(elements);
  return atIndex !== null ? tElements[atIndex] : tElements ;
}


function byTag(element){
  if( typeof element != 'string'){
      console.log('Erreur : byTag doit être une chaîne de caractère');
  }

  return document.getElementsByTagName(element);
}


function addClass(element, classList){
  if(( typeof element != 'string') || ( typeof classList != 'string')){
      console.log('Erreur : element et classList doivent être des chaînes de caractère');
  }

  return element.classList.add(classList);
}


function removeClass(element, classList){
  if(( typeof element != 'string') || ( typeof classList != 'string')){
      console.log('Erreur : Erreur : element et classList doivent être des chaînes de caractère');
  }

  return element.classList.remove(classList);
}


function createElement(element){
  if( typeof element != 'string'){
      console.log('Erreur : createElement doit être une chaîne de caractère');
  }

  return document.createElement(element);
}
