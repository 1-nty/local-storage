// add data to storage (key , value)
localStorage.setItem('myCat', 'Tom');
// retreive the valueOf key   === this returns 'Tom'
var cat = localStorage.getItem('myCat');
// remove from localStorage object
localStorage.removeItem('myCat');
// clear storage
localStorage.clear();
