var img_upgrade = document.getElementById("img");
var butt = document.getElementById("butt");
var valtext = document.getElementById("val");
var value = 0
var upgbutt = document.getElementById("upgrade");
var money_amunt = 1
var upg_1price = 50

var img_dick = {
  1: "https://ih1.redbubble.net/image.3185759508.5148/st,small,507x507-pad,600x600,f8f8f8.jpg",
  5: "https://pbs.twimg.com/media/FNcEvsDVEAMoNWL.jpg:large",
};

function findclosest(v){
  var closest = 0
  for (const [key, value] of Object.entries(img_dick)) {
    console.log(key,value)
    if (key <= v) {
      closest = key
    }
  }
  return closest
}

butt.onclick = function(){
  value = value + money_amunt
  valtext.innerHTML= value + " $"
}

upgbutt.onclick = function(){
  if (value >= upg_1price ){
    value = value -upg_1price 
    valtext.innerHTML= value + " $"
    
    money_amunt = money_amunt +1
    
     upg_1price = upg_1price  + 70 
    
    upgbutt.innerHTML = "UPGRADE " + upg_1price + "$"
    
  
    var closest = findclosest(money_amunt)
    document.getElementById("img").src = img_dick[closest]
    
  }
}
 
 