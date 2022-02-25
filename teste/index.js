function calcularLife() {
  let teeth = document.querySelector("#teeth")
  let teethValue = teeth.value

  let pincer = document.querySelector("#pincer")
  let pincerValue = pincer.value

  let brain = document.querySelector("#brain")
  let brainValue = brain.value

  let token = document.querySelector("#token")
  let tokenValue = token.value

  let resultado = teethValue * 25 + pincerValue * 15 + brainValue * 5
  let goldToken = tokenValue * 6

  if ((teethValue * 25) + (pincerValue * 15) + (brainValue * 5) > tokenValue * 6) {
    document.getElementById("texto-escrito-life").innerText = ("O preço para fazer o imbui de Vida é de: " + resultado.toLocaleString() + "\nO preço para fazer em gold Token é: " + goldToken.toLocaleString() + "\nÉ recomendável trocar os Vampire Teeths, Bloody Pincers e Pieces of Dead Brain por gold token em vez de comprar no market")
  }
  else if ((teethValue * 25) + (pincerValue * 15) > tokenValue * 4) {
    document.getElementById("texto-escrito-life").innerText = ("O preço para fazer o imbui de Vida é de: " + resultado.toLocaleString() + "\nO preço para fazer em gold Token é: " + goldToken.toLocaleString() + "\nÉ recomendável trocar os Vampire Teeths e Bloody Pincers por gold token em vez de comprar no market")
  }
  else if (teethValue * 25 > tokenValue * 2) {
    document.getElementById("texto-escrito-life").innerText = ("O preço para fazer o imbui de Vida é de: " + resultado.toLocaleString() + "\nO preço para fazer em gold Token é: " + goldToken.toLocaleString() + "\nÉ recomendável trocar apenas os Vampire Teeths por gold token em vez de comprar no market")
  }
  else {
    document.getElementById("texto-escrito-life").innerText = ("O preço para fazer o imbui de Vida é de: " + resultado.toLocaleString() + "\nO preço para fazer em gold Token é: " + goldToken.toLocaleString() + "\nÉ recomendável comprar os itens pelo market")
  }
}

function calcularMana() {
  let belt = document.querySelector("#belt")
  let beltValue = belt.value

  let claw = document.querySelector("#claw")
  let clawValue = claw.value

  let wing = document.querySelector("#wing")
  let wingValue = wing.value

  let token = document.querySelector("#token1")
  let tokenValue = token.value

  let resultado = beltValue * 25 + clawValue * 15 + wingValue * 5
  let goldToken = tokenValue * 6

  if ((beltValue * 25) + (clawValue * 15) + (wingValue * 5) > tokenValue * 6) {
    document.getElementById("texto-escrito-mana").innerText = ("O preço para fazer o imbui de Mana é de: " + resultado.toLocaleString() + "\nO preço para fazer em gold Token é: " + goldToken.toLocaleString() + "\nÉ recomendável trocar os Rope Belts, Silencer Claws e Grimeleech Wings por gold token em vez de comprar no market")
  }
  else if ((beltValue * 25) + (clawValue * 15) > tokenValue * 4) {
    document.getElementById("texto-escrito-mana").innerText = ("O preço para fazer o imbui de Mana é de: " + resultado.toLocaleString() + "\nO preço para fazer em gold Token é: " + goldToken.toLocaleString() + "\nÉ recomendável trocar os Rope Belts e Silencer Claws por gold token em vez de comprar no market")
  }
  else if (beltValue * 25 > tokenValue * 2) {
    document.getElementById("texto-escrito-mana").innerText = ("O preço para fazer o imbui de Mana é de: " + resultado.toLocaleString() + "\nO preço para fazer em gold Token é: " + goldToken.toLocaleString() + "\nÉ recomendável trocar apenas os Rope Belts por gold token em vez de comprar no market")
  }
  else {
    document.getElementById("texto-escrito-mana").innerText = ("O preço para fazer o imbui de Mana é de: " + resultado.toLocaleString() + "\nO preço para fazer em gold Token é: " + goldToken.toLocaleString() + "\nÉ recomendável comprar os itens pelo market")
  }

}

function calcularStrike() {
  let protective = document.querySelector("#protective")
  let protectiveValue = protective.value

  let tooth = document.querySelector("#tooth")
  let toothValue = tooth.value

  let talon = document.querySelector("#talon")
  let talonValue = talon.value

  let token = document.querySelector("#token2")
  let tokenValue = token.value

  let resultado = protectiveValue * 20 + toothValue * 25 + talonValue * 5
  let goldToken = tokenValue * 6

  if ((protectiveValue * 25) + (toothValue * 15) + (talonValue * 5) > tokenValue * 6) {
    document.getElementById("texto-escrito-strike").innerText = ("O preço para fazer o imbui de Crítico é de: " + resultado.toLocaleString() + "\nO preço para fazer em gold Token é: " + goldToken.toLocaleString() + "\nÉ recomendável trocar os Protective Charms, Sabretooths e Vexclaw Talons por gold token em vez de comprar no market")
  }
  else if ((protectiveValue * 20) + (toothValue * 25) > tokenValue * 4) {
    document.getElementById("texto-escrito-strike").innerText = ("O preço para fazer o imbui de Crítico é de: " + resultado.toLocaleString() + "\nO preço para fazer em gold Token é: " + goldToken.toLocaleString() + "\nÉ recomendável trocar os Protective Charms e Sabretooths por gold token em vez de comprar no market")
  }
  else if (protectiveValue * 25 > tokenValue * 2) {
    document.getElementById("texto-escrito-strike").innerText = ("O preço para fazer o imbui de Crítico é de: " + resultado.toLocaleString() + "\nO preço para fazer em gold Token é: " + goldToken.toLocaleString() + "\nÉ recomendável trocar apenas os Protective Charms por gold token em vez de comprar no market")
  }
  else {
    document.getElementById("texto-escrito-strike").innerText = ("O preço para fazer o imbui de Crítico é de: " + resultado.toLocaleString() + "\nO preço para fazer em gold Token é: " + goldToken.toLocaleString() + "\nÉ recomendável comprar os itens pelo market")
  }
}