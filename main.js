let numbe = [];
for (let i=0;i<3;i++){
    let number = parseFloat(prompt(`Enter ${i + 1}`));
    numbe.push(number);   
    numbe.sort();         
}
document.getElementById("number").innerHTML = numbe;   
