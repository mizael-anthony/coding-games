const s = "H8ell4o Worl2d"

let str = ""
let dg = 0


for(let i = 0; i < s.length; i++){
    const v = s.charAt(i)
    console.log(v)

    if(isNaN(v) || v === " "){
        str += v
        
    }

    else {
        dg += parseInt(v)
    }


}

console.log(str, dg)