function calcular(){

    var a = document.getElementById("in");
    var b = document.getElementById("op");
    var n = Number(a.value);
   

    if (a.value.length == 0){
        alert("Digite um número")
    }else{
        b.innerHTML = ""
        var c = 1
        while (c <= 10){
        
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c} `
            item.value = `tab${c}`
            b.appendChild(item)
            c++
        
        }
    
    }
}