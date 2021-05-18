let result = [];

const values = [];
const URLs = [];

document.querySelectorAll('#values li').forEach(item => values.push(Number(item.textContent)));
document.querySelectorAll('#urls li').forEach(item => URLs.push(item.textContent));

document.querySelector('button').addEventListener('click', async ({ target: t }) => {
    result = []; 
    t.textContent = 'Ждите меня с первым лучом солнца, я приду на 5-ый день, с востока...';
    t.style.pointerEvents = 'none';

    for (let i=0; i<values.length; i++) {
      let preliminaryResult;

      result.length > 0 ? 
        preliminaryResult = await fetch(URLs[i] + values[i] + '/' + result[i-1], { headers : { 'Content-Type': 'application/json' } })
          .then((res) => { return  res.json() }) 
        :
        preliminaryResult = await fetch(URLs[i] + values[i], { headers : { 'Content-Type': 'application/json' } })
          .then((res) => { return  res.json() })


      result.push(preliminaryResult.result);

    }
    
    t.style.pointerEvents = 'all';
    console.log('Гендальф прибыл с подкреплением!');
    
    t.textContent = `Результат: ${result}`;
  }
); 