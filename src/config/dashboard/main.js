function getColor(score) {
  if (score >= 90) {
    return "#7ecf51";
  } else if (score >= 80) {
    return "#1c8bea";
  } else if (score >= 70) {
    return "#ddb926";
  }
  return "#ea3c3e";
}
let option = score => {
  let print = parseFloat((score.print / 100).toFixed(4));
  let paper = parseFloat((score.paper / 100).toFixed(4));

  let mainSetting = {
    type: "liquidFill",
    animation: true,
    waveAnimation: true,
    waveLength: "80%",
    amplitude: 8,
    radius: "70%",
    itemStyle: {
      backgroundColor: "#fff"
    }
  };

  let colorSetting = idx => {
    let color = idx === 0 ? getColor(score.print) : getColor(score.paper);
    let label = idx === 0 ? "印刷" : "钞纸";

    return {
      color: [color],
      label: {
        formatter: function(val) {
          return label + "工序\n\n" + val.value * 100 + "分";
        },
        textStyle: {
          fontSize: 22,
          color
        }
      },
      outline: {
        itemStyle: {
          borderColor: color,
          borderWidth: 5,
          shadowBlur: 20,
          shadowColor: "#fff"
        },
        borderDistance: 0
      }
    };
  };

  return {
    title: [
      {
        textStyle: {
          color: "#fff",
          fontSize: 30,
          fontWeight: "lighter" //100
        },
        text: "质量实时监控预警",
        left: "center"
      }
    ],
    series: [
      {
        data: [print],
        center: ["25%", "60%"],
        ...mainSetting,
        ...colorSetting(0)
      },
      {
        data: [paper],
        center: ["75%", "60%"],
        ...mainSetting,
        ...colorSetting(1)
      }
    ]
  };
};
export default option;
