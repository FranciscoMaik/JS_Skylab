var listUl = document.querySelector("#app ul");
var waveContainer = document.getElementById("waveID");

function renderRepo(repo){
    waveContainer.classList.toggle("circle");
    listUl.innerHTML = "";
    var quantidadeRepo = document.createElement('h2');
    var textQuantidade = document.createTextNode(repo.length + " Repositorio(s)");
    var imageUser = document.createElement('img');
    
    

    imageUser.setAttribute('src',repo[0].owner.avatar_url);
    quantidadeRepo.appendChild(textQuantidade);
    quantidadeRepo.setAttribute('id','fontH2');
    listUl.appendChild(imageUser);
    listUl.appendChild(quantidadeRepo);
    

    
    for(reposi of repo){
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode(reposi.name);
        var description = document.createElement('p');
        var clone = document.createElement('a');
        var textClone = document.createTextNode('Link para o clone do repositorio!');
        var linguagem = document.createElement('p');
        var textLinguagem = document.createTextNode("Linguagem: " + reposi.language);
        var forks = document.createElement('p');
        var textfork = document.createTextNode("Quantidade de Forks: " + reposi.forks);
        
        if (typeof(reposi.description) != "string"){
            var textDescription = document.createTextNode("Sem Descrição");
        }else{
            var textDescription = document.createTextNode("Descrição: " + reposi.description);

        }

        forks.appendChild(textfork);
        linguagem.appendChild(textLinguagem);
        clone.appendChild(textClone);
        clone.setAttribute("href",reposi.clone_url)
        clone.setAttribute('target', '_blank')
        repoElement.appendChild(repoText);
        listUl.appendChild(repoElement);
        description.appendChild(textDescription);
        repoElement.appendChild(description);
        repoElement.appendChild(linguagem);
        repoElement.appendChild(forks);
        repoElement.appendChild(clone);
    }
}

function clickButton(){
    var inputNew = document.querySelector('input[name=user]').value;
    console.log(inputNew);
    axios.get(`https://api.github.com/users/${inputNew}/repos`)
        .then(function(response){
            var repo = response.data;
            listUl.innerHTML = "";
            waveContainer.classList.toggle("circle");
            setTimeout(function(){
                renderRepo(repo);
            },3000);
        })
        .catch(function(reject){
            alert('Erro na busca do usuario!');
        });

}