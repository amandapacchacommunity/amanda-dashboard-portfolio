function parseCSV(text) {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",").map(h => h.trim());

  return lines.slice(1).map(line => {
    const values = line.split(",").map(v => v.trim());
    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index];
    });

    return row;
  });
}

async function loadDashboard() {

  const riskResponse = await fetch("data/risk_register.csv");
  const riskText = await riskResponse.text();

  const risks = parseCSV(riskText).map(r => ({
    ...r,
    impact_level: Number(r.impact_level),
    probability_level: Number(r.probability_level),
    risk_score: Number(r.impact_level) * Number(r.probability_level)
  }));


  const actionsResponse = await fetch("data/risk_actions.csv");
  const actionsText = await actionsResponse.text();
  const actions = parseCSV(actionsText);


  const sortedRisks = [...risks].sort((a, b) => b.risk_score - a.risk_score);


  document.getElementById("totalRisks").textContent = risks.length;

  document.getElementById("highestRisk").textContent =
    sortedRisks.length > 0 ? sortedRisks[0].risk_score : 0;

  document.getElementById("totalActions").textContent = actions.length;



  const tbody = document.querySelector("#riskTable tbody");
  tbody.innerHTML = "";

  sortedRisks.slice(0,5).forEach(risk => {

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${risk.risk_description || ""}</td>
      <td>${risk.impact_level}</td>
      <td>${risk.probability_level}</td>
      <td>${risk.risk_score}</td>
    `;

    tbody.appendChild(tr);

  });



  const ctx = document.getElementById("riskChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: sortedRisks.map(r => r.risk_description),
      datasets: [{
        label: "Risk Score",
        data: sortedRisks.map(r => r.risk_score),
        backgroundColor: "#2a6db0"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}

loadDashboard();
