const BuyTIckets = () => {
  const buyers = [
    {
      name: 'anny',
      price: 5
    },
    {
      name: 'izan',
      price: 7
    },
    {
      name: 'maria',
      price: 10
    }
  ]
  const ticketsValues = [3, 5, 6, 7, 8, 14]
  console.log(buyers[0].name)

  const purchaseByAnny = ticketsValues.filter((item) => item <= buyers[0].price)
  const purchaseByIzan = ticketsValues.filter((item) => item <= buyers[1].price)
  const purchaseByMaria = ticketsValues.filter((item) => item <= buyers[2].price)
  console.log('purchaseAnny', purchaseByAnny)
  console.log('purchaseIzan', purchaseByIzan)
  console.log('purchaseAnny', purchaseByMaria)

  return { purchaseByAnny, purchaseByIzan, purchaseByMaria }
}

BuyTIckets()