let item1 = document.getElementById('item_1');
let item2 = document.getElementById('item_2');
let item3 = document.getElementById('item_3');
let senha = document.getElementById('senha');
let criar = document.getElementById('btn');

senha.addEventListener('input',verificarSenha);

function verificarSenha()
{
    const valor = senha.value;
    console.log(valor);

    for(i = 0; i < valor.length; i ++)
    {
        if(valor.includes('!') || valor.includes('@') || valor.includes('$'))
        {
            item3.style.color = '#fff';
        }
        else
        {
            item3.style.color ='#606060';
        }

        if(valor.length == 16)
        {
            item1.style.color = '#fff';
        }
        else
        {
            item1.style.color = '#606060';
        }   

        for(i = 0; i < valor.length; i ++)
        {
            if(valor[i] >= 'A' && valor[i] <= 'Z')
            {
                console.log('Maiuscula');
                item3.style.color = '#fff';
            }
            else
            {
                console.log('Não contem ');
                item3.style.color ='#606060';
            }
        }
    }
}
