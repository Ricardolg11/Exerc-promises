// Promises 
// .then / .catch para ver os resultados

// resolve funcao para indica que deu tudo certo
// rejec e uma funcao para que deu errado

// 1 Ex
const somadoisnumeros = (a , b) =>{
    return  new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve( a < b ? a + b : a - b);
            reject();
        }, 2000);
    });
}

somadoisnumeros(1, 3)
    .then(soma =>{
        document.body.innerText = soma;
    })

// para tratar o erro da promise
    .catch(err => {
        console.log(err)
    })



// 2 Ex
fetch('https://api.github.com/users/ricardolg')

// Melhor
    .then(response => {
        return response.json();
    })
    .then(body => {
        console.log(body)
    })
/*
    .then(reponse => {
        reponse.json().then(body => {
            console.log(body);
        })
    })
*/
    .catch(err => {
        console.log(err)
    })

    .finally(() => {
        console.log("Final")
    })

   async function buscaDadosNogit(){
    try {

    const response = await fetch('https://api.github.com/users/ricardolg');
    const body = await response.json();

    //console.log(body);
    return body.login
}
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('fim');
    }
    /*
    fetch('https://api.github.com/users/ricardolg')

    .then(response => {
        return response.json();
    })
    .then(body => {
        console.log(body)
    })

    .catch(err => {
        console.log(err)
    })

    .finally(() => {
        console.log("Final")
    })
    */
    }

    buscaDadosNogit().then(login=> {
        console.log(login)
    });
