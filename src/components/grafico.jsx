import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import "./styles/grafico.scss";

function Grafico(props) {
  return (
    <section id="grafico">
      <Chart
        width={"100%"}
        height={"100%"}
        chartType="PieChart"
        data={props.data}
        options={{
          //fontSize: 25,
          pieSliceText: "label",
          legend: "none",
          chartArea: { width: "95%", height: "95%" },
          backgroundColor: "100c2e",
        }}
      />
    </section>
  );
}

export default Grafico;
