import "./styles/botaodegiro.scss";

function Botaodegiro() {
  const rolarPraCima = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // animação suave de rolagem
    });
  };

  const girar = () => {
    rolarPraCima();

    const grafico = document.getElementById("grafico");
    const rotacao = Math.floor(Math.random() * 10000);

    grafico.style.transform = `rotate(${rotacao}deg)`;
  };

  return (
    <>
      <button onClick={girar} id="giro">
        Girar roleta
      </button>
    </>
  );
}

export default Botaodegiro;
