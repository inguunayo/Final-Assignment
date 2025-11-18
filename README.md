# Stock Data Analysis - Tesla and GameStop

A Jupyter notebook for extracting and visualizing stock data for Tesla (TSLA) and GameStop (GME), including historical share prices and revenue data.

## Overview

This project demonstrates data extraction and visualization techniques using:
- **yfinance API** for stock price data
- **Web scraping** for revenue data
- **Plotly** for interactive visualizations

## Features

- Extract historical stock price data for Tesla and GameStop
- Scrape quarterly revenue data from web sources
- Generate interactive dual-panel charts showing:
  - Historical share price trends
  - Historical revenue trends
- Error handling and progress feedback
- Data validation and cleaning

## Prerequisites

- Python 3.7 or higher
- Jupyter Notebook or JupyterLab

## Installation

1. Clone or download this repository

2. Install required dependencies:

```bash
pip install plotly==5.18.0
pip install pandas
pip install bs4
pip install yfinance
```

## Usage

### Running the Notebook

1. Open the notebook:
```bash
jupyter notebook "Final Assignment.ipynb"
```

2. Run all cells in order (Cell → Run All) or execute cells individually

### What Each Section Does

**Question 1-2: Tesla Data**
- Extracts Tesla stock data using yfinance API
- Scrapes Tesla revenue data from IBM Cloud Object Storage
- Cleans and prepares data for visualization

**Question 3-4: GameStop Data**
- Extracts GameStop stock data using yfinance API
- Scrapes GameStop revenue data from web
- Processes and validates the data

**Question 5-6: Visualizations**
- Generates interactive graphs for Tesla and GameStop
- Displays historical share prices and revenue side-by-side

### Expected Output

Each data extraction step provides feedback:
- ✓ Success messages with data counts
- ✗ Error messages if something fails
- Data range information
- Row counts and validation results

## Troubleshooting

### Common Issues

**Import errors:**
```bash
# Reinstall dependencies
pip install --upgrade yfinance plotly pandas beautifulsoup4
```

**Connection timeout:**
- Check your internet connection
- The notebook has 10-second timeouts for web requests
- URLs are hardcoded to IBM course data storage

**Graph not displaying:**
- Ensure plotly version 5.18.0 is installed
- Check that the renderer is set correctly (cell 7)

**Deprecation warnings:**
- These have been addressed in the latest version
- Using modern pandas methods instead of deprecated `_append()`

## Data Sources

- **Stock Data**: Yahoo Finance via yfinance library
- **Tesla Revenue**: IBM Cloud Object Storage (course materials)
- **GameStop Revenue**: IBM Cloud Object Storage (course materials)

## Output Files

The notebook generates:
- `Question 5 Tesla Graph.png` - Tesla visualization
- `Question 6 GameStop Graph.png` - GameStop visualization

## Notes

- Stock data is fetched with `period="max"` to get maximum historical data
- Revenue data is quarterly and may not be current
- Graphs show data up to June 2021 per course requirements
- All financial figures are in US Dollars

## Improvements Made

This enhanced version includes:
- ✓ Fixed variable name case sensitivity errors
- ✓ Replaced deprecated pandas methods
- ✓ Added comprehensive error handling
- ✓ Progress indicators and user feedback
- ✓ Data validation and cleaning steps
- ✓ Clear comments throughout code
- ✓ Timeout protection for web requests

## License

This is an educational project for IBM Developer Skills Network.

## Authors

- Joseph Santarcangelo (Original)
- Azim Hirjani (Contributor)
- Enhanced version with improved usability (2025)

## Acknowledgments

- IBM Developer Skills Network
- Yahoo Finance (yfinance library)
- Plotly graphing library
