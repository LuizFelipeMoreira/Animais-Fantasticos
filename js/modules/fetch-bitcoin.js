export default function fetchBitCoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bitCoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitCoin.BRL.sell).toFixed(4);
    })
    .catch(() => {
      console.log(Error("erro na promise"));
    });
}
