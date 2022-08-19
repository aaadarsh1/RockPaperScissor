let player=0,comp=0;
let y,z;

const boxElements = document.querySelectorAll('.box')

startGame();
function startGame()
{
    document.getElementById('myScore').innerHTML = `Player Score : ${player}`;
    document.getElementById('compScore').innerHTML = `Computer Score : ${comp}`;

    document.getElementById('image1').classList.remove('moving');
    document.getElementById('image2').classList.remove('moving');

    boxElements.forEach(box => {
        box.addEventListener('click',fun1);
    });
}

function fun1(e)
{
    document.getElementById('winBoard').innerHTML = "";
    document.getElementById('image1').classList.add('moving');
    document.getElementById('image2').classList.add('moving');

    const box = e.target;
    setTimeout(fun2,2600,box);
}
function fun2(box)
{
    z=Math.floor(Math.random() * 3) + 1;
    let b=box.innerHTML;
    if(b=="Rock")
        y=1;
    else if(b=="Paper")
        y=2;
    else
        y=3;
    imageShow(y,z);
    winnerDecide(y,z);
    startGame();
}

function imageShow(y,z)
{
    document.getElementById('image1').classList.remove('rockImage');
    document.getElementById('image1').classList.remove('paperImage');
    document.getElementById('image1').classList.remove('scissorImage');
    if(y==1)
        document.getElementById('image1').classList.add('rockImage');
    else if(y==2)
        document.getElementById('image1').classList.add('paperImage');
    else
        document.getElementById('image1').classList.add('scissorImage');
    document.getElementById('image2').classList.remove('rockImage');
    document.getElementById('image2').classList.remove('paperImage');
    document.getElementById('image2').classList.remove('scissorImage');
    if(z==1)
        document.getElementById('image2').classList.add('rockImage');
    else if(z==2)
        document.getElementById('image2').classList.add('paperImage');
    else
        document.getElementById('image2').classList.add('scissorImage');
}

function winnerDecide(y,z)
{
    if((y==2&&z==1)||(y==3&&z==2)||(y==1&&z==3))
    {
        player++;
        document.getElementById('winBoard').innerHTML = "Player Win";
    }
    else if(y==z)
    {
        document.getElementById('winBoard').innerHTML = "Tie";
    }
    else
    {
        comp++;
        document.getElementById('winBoard').innerHTML = "Computer Win";
    }
}