document.write("===soal1 a===")
document.write("<br>")

for(var y=0; y<9; y++){
  for(var x=0; x<9; x++){
    if(8 - x <= y ){
      document.write(y *2)
    }else{
         document.write(" - ")
    }
  }
  document.write("<br>")
}


document.write("<br>")
document.write("==soal1 b===")
document.write("<br>")
for(var y=0; y<9; y++){
  for(var x=0; x<9; x++){
    if(x == y ){
      document.write(y *2)
    }else if(x == 8-y){
       document.write(y*2-1)
    }else
    {
         document.write(" - ")
    }
  }
  document.write("<br>")
} 



var a=0;
var b=1;
var c=1;
var d=1;
document.write("<br>")
document.write("===soal2===")
document.write("<br>")

document.write(1 + " "+1 + " ")
for(var x=0; x<7; x++){
  document.write(d + " ")
  a=b;
  b=c;
  c=d;
  d=a+b+c;
  
}