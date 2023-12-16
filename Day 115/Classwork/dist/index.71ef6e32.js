let e=0;function t(){document.getElementById("balance").innerText=`Balance: $${e}`}document.getElementById("deposit").addEventListener("click",()=>{e+=10,t()}),document.getElementById("withdraw").addEventListener("click",()=>{e>=10?(e-=10,t()):alert("Insufficient funds")}),t();
//# sourceMappingURL=index.71ef6e32.js.map
