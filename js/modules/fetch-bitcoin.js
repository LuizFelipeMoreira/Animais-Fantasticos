export default function initFetchBitCoin() {}

fetch("https://blockchain.info/ticker")
  .then((r) => r.json())
  .then((bitCoin) => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (1000 / bitCoin.BRL.sell).toFixed(4);
    console.log(bitCoin.BRL.sell);
  })
  .catch(() => {
    console.log(Error("erro na promise"));
  });
