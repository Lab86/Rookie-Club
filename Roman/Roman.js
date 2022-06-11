window.onkeyup = conversion;

var inputchiffre;
var dizaine;

function conversion(e) {
  inputchiffre = e.target.value;
  dizaine = Math.floor(inputchiffre /10);
  
  unite = inputchiffre - (dizaine *10);
  
  if (inputchiffre < 40 && unite <= 3)
      {
             $('#chiffreromain').text("X".repeat(dizaine) + ("I".repeat(unite)));
    
     }
    else if (inputchiffre < 40 && unite == 4)
      {
        $('#chiffreromain').text("X".repeat(dizaine) + ("IV"));
      }
    else if (inputchiffre < 40 && [5,6,7,8].includes(unite))
      {
        $('#chiffreromain').text("X".repeat(dizaine) + ("V") + ("I".repeat(unite - 5)));
      }
    else if (inputchiffre < 40 && unite == 9)
      {
        $('#chiffreromain').text("X".repeat(dizaine) + ("IX"));
      }
}
