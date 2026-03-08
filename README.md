# Enterprise Risk Management Dashboard Portfolio

This repository contains datasets, documentation, and visualizations used to demonstrate an **Enterprise Risk Management (ERM) dashboard**.

The project models how organizations identify risks, assign mitigation strategies, and track operational actions through structured data.

---

## Project Overview

Organizations use ERM frameworks to monitor risks that may affect operations, finances, technology, safety, and reputation.

This project simulates a **risk register and mitigation action tracking system** that can power executive dashboards and operational reporting.

The datasets and visuals included here demonstrate how risk data can be transformed into meaningful analytics.

---

## Repository Structure

- `data/` – source datasets for the dashboard  
- `dashboards/` – exported dashboard images  
- `docs/` – project notes and model description  

---

## Datasets

### risk_register.csv

Contains the primary risk register with information about each risk.

Fields include:

- Risk description
- Impact description
- Impact level
- Probability level
- Priority score
- Responsible owner
- Risk status

These values allow calculation of **risk priority and heatmap positioning**.

---

### risk_actions.csv / risk_actions.json

Contains mitigation actions associated with each risk category.

Fields include:

- Risk category
- Assigned mitigation plan
- Action
- Mitigation impact score
- Quarter
- Owner
- ERM / BCM classification

This dataset allows dashboards to track **mitigation progress and operational risk reduction**.

---

## Dashboard Visualizations

### ERM Dashboard
![ERM Dashboard](https://raw.githubusercontent.com/amandapacchacommunity/amanda-dashboard-portfolio/main/dashboards/erm_dashboard.png)

### Risk Heatmap
![Risk Heatmap](https://raw.githubusercontent.com/amandapacchacommunity/amanda-dashboard-portfolio/main/dashboards/risk_heatmap.png)

### Mitigation Summary
![Mitigation Summary](https://raw.githubusercontent.com/amandapacchacommunity/amanda-dashboard-portfolio/main/dashboards/mitigation_summary.png)

### Dashboard Mockup
![Dashboard Mockup](https://raw.githubusercontent.com/amandapacchacommunity/amanda-dashboard-portfolio/main/dashboards/dashboard_mockup.png)

---

## Example Dashboard Use Cases

These datasets can be used to create dashboards such as:

- Risk heatmaps
- Risk category summaries
- Mitigation progress tracking
- Quarterly risk action reporting
- Executive risk summaries

Tools commonly used for these dashboards include:

- Power BI
- Tableau
- Python dashboards (Streamlit / Plotly)
- Web dashboards (React / D3)

---

## Purpose of This Project

This repository demonstrates how structured risk data can support:

- Enterprise risk management
- Business continuity planning
- Operational oversight
- Executive decision-making

The goal is to show how **raw risk data can be transformed into clear dashboard insights**.

---

## Author

Amanda Paccha  
Data Analytics & Risk Analytics Portfolio Project
