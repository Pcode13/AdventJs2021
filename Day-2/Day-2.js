const carta = 'bici coche balón _playstation bici coche peluche';

function listGifts(carta) {
    const words = carta.split(' '); 
    const giftsCount = {}; 

    for (let i = 0; i < words.length; i++) {
        const gift = words[i];
        if (!gift.startsWith('_')) { 
            if (giftsCount[gift]) {
                giftsCount[gift]++; 
            } else {
                giftsCount[gift] = 1;
            }
        }
    }

    return giftsCount; 
}

const regalos = listGifts(carta);
console.log(regalos);


//

function listGifts(carta) {
  return carta
      .split(' ')  
      .filter(item => !item.startsWith('_'))  
      .reduce((acc, gift) => {
          acc[gift] = (acc[gift] || 0) + 1;  
          return acc;
      }, {}); 
}


