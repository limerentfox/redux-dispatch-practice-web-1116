export let state;


export function managePets(state ={pets: []}, action ){
  switch (action.type) {
    case 'ADD_PET':
    return {...state, pets:[...state.pets, action.payload]}
    case 'REMOVE_PET':
    let newPets = state.pets.filter((pet) => {
      return pet.id !== action.payload
    })

    return {...state, pets: newPets}
    default:
      return state
  }
}

export function dispatch( action ){
  state = managePets(state, action)
  render()
}

export function render(){
  const petArray = state.pets
  let container = document.getElementById('container')
  container.innerHtml = `<ul>${petArray.map( pet =>  `<li>${pet.name}</li>` )}</ul>`

    }
