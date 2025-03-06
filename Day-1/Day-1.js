//Solution 1
export default function contarOvejas(ovejas) {
    let arr=[]
  for(let i=0;i<ovejas.length ;i++){
      if( ovejas[i].color ==='rojo' && ovejas[i].name.toLowerCase().includes('n') && ovejas[i].name.toLowerCase().includes('a') ){
          arr.push(ovejas[i])
      }
  }
  return arr
}











const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)