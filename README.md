The EEG_Tool is a GUI interface for the iEEG to BIDS format based on [EEG2BIDS](https://github.com/aces/EEG2BIDS) and is used with LORIS (Longitudinal Online Research and Imaging System). Users can use their LORIS credentials with a LORIS URL and automatically retrieve LORIS data for the EEG to BIDS format. Becareful to remove your login credentials after using EEG2BIDS on a shared computer!

#### Development Requirements:

 * [Node.js](https://nodejs.org/en/download/current) == 14.16.1 LTS
 * NPM >= 7.10.0 (included with Node.js)
 * [Python](https://www.python.org/downloads/) == 3.8.5

#### Development Build guide:

Inside project root using your terminal type:
```
npm install
npm run start
# In another terminal inside project root type:
sudo apt-get install python3-venv
npm run start-server
```

**Note:** Both the "python-service" & the "electron-app" need to be running simultaneously for EEG2BIDS to successfully function in development!
