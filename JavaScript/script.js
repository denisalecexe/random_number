document.querySelector('button').addEventListener('click', function() {
  document.querySelector('#randomNum').innerHTML = 
  Math.floor(Math.random() * 1000) + 1;
});

document.querySelector('#randomNum').style.fontSize = "50px";
document.querySelector('#randomNum').style.fontWeight = "800";
document.querySelector('#randomNum').style.color = "red";