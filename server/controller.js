const houses = require('./db.json')
let globalId = 4

module.exports = {
  getHouses: (req, res) => {
    console.log('I will comply.')
    res.status(200).send(houses)

},

  createHouse: (req, res) => {
    console.log('Clever, I am intrigued.')
    let {address, price, imageURL} = req.body

    let newHouse = {
        id: globalId,
        address,
        price,
        imageURL
    }
    houses.push(newHouse)
    res.status(200).send(houses)
    globalId++
    console.log('Zerashk Gulida.')

  },

  updateHouse: (req, res) => {
    let {type} = req.body
    let {id} = req.params
    let index = houses.findIndex(house => house.id === +id)

    if(houses[index].price === 0 && type === 'minus'){
        console.log(' I... cannot maintain!')
        res.status(400).send('We are not PAYING people to live here!')

    }else if (type === 'plus'){
        console.log('Khatum.')
        houses[index].price += 10000
        res.status(200).send(houses)
        console.log("Ner'Mah.")
    }else if (type === 'minus') {
        console.log('Twilight falls upon us all!')
        houses[index].price -= 10000
        res.status(200).send(houses)
        console.log('The Void claims its own.')

    }else {
        console.log('Raszagal, watch over us...')
        res.status(400)
    }

  },


  deleteHouse: (req, res) => {
    console.log('Alakor de zhakan!')
    let index = houses.findIndex(house => house.id === +req.params.id)
    houses.splice(index, 1)
    res.status(200).send(houses)
    console.log('I am but a phantom.')

  }



}