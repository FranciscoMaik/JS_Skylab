function checaIdade(idade){
    return new Promise(function(resolve,reject){
        if (idade > 18){
            resolve(idade);
        }else if(idade >= 0 && idade <=18){
            reject(idade);
        }
    })
}

setTimeout(function(){
    checaIdade(23)
    .then(function(){
        console.log("Maior que 18");
    })
    .catch(function(){
        console.log("Menor que 18")
    })},2000);