// menangkap elemen
document.querySelectorAll("#option a").forEach((anchor) => {
    anchor.onclick = (element) => {
        computerChoice(element);

    }
});


function computerChoice(element){
    //membuat element pilihan komputer
    let pilihanKomputer = document.querySelector('#result');

    //menangkap element pilihan user
    let pilihanUser = element.target.innerText;

    //membuat sebuah array untuk pilihan komputer
    let choices = ['Rock', 'Paper', 'Scissor'];

    //membuat pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    //pilihan jika draw atau seri
    if (pilihanUser == pilihanKomputer){
        alert('Draw')
    }
    
    //pilihan jika user menang
    if (pilihanUser == 'Rock' && pilihanKomputer == 'Scissor'){
        alert('You win');
    }   else if(pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
        alert('You Win');
    }  else if(pilihanUser == 'Scissor' && pilihanKomputer == 'Paper'){
        alert('You Win');
    }

    //pilihan jika komputer menang
    if (pilihanUser == 'Scissor' && pilihanKomputer == 'Rock'){
        alert('You Lose');
    }   else if(pilihanUser == 'Rock' && pilihanKomputer == 'Paper'){
        alert('You Lose');
    }  else if(pilihanUser == 'Paper' && pilihanKomputer == 'Scissor'){
        alert('You Lose');
    }
}

