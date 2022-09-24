import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Chart from 'chart.js/auto';
import Grid from '@mui/material/Grid';
import { CategoryScale } from 'chart.js';
import { Line } from "react-chartjs-2";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const data = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  datasets: [
    {
      label: "Accuracy",
      data: [36, 64, 78, 84, 95, 95, 97, 97, 99, 99],
      fill: false,
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};

const classes = [
  { label: 'Bicycle' },
  { label: 'Bike' },
  // { label: 'Bike_Car' },
  { label: 'Car' },
  { label: 'Hatchback' },
  { label: 'Human' },
  // { label: 'Human_Car' },
  { label: 'Sedan' },
  { label: 'SUV' },
  { label: 'Truck' },
  { label: 'Van' },
];

const parseTime = (input) => {
  let output = input.substr(0, 10) + ' ' + input.substr(11, 8);
  return output;
}

const decrypt = (input) => {
  
  // add decryption code
  
  return input;
}

function App() {


  const [jsonData, setJsonData] = useState([]);

  React.useEffect(() => {

    fetch('https://api.thingspeak.com/channels/1579755/fields/3.json?results=10')
      .then(res => res.json())
      .then(data => setJsonData(data["feeds"]))

  }, [])

  Chart.register(CategoryScale);

  return (
    <Box>
      <Grid container spacing={2} sx={{ p: 4 }} align="center" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
        <Typography variant="h3" sx={{ pt: 8, pb: 4 }}>
          Object Classifier
        </Typography>
      </Grid>
      <Grid item xs={6}>
      <Typography variant="h6" sx={{ py: 4 }}>
          Train Accuracy
        </Typography>

        <Line data={data} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" sx={{ py: 4 }}>
          Recent Predictions
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Prediction</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jsonData.map(e => {
                return <TableRow>
                  <TableCell>
                    {parseTime(e["created_at"])}
                  </TableCell>
                  <TableCell>
                    {decrypt(e["field3"])}
                  </TableCell>
                </TableRow>
              })}
            </TableBody>
          </Table>
        </TableContainer>

      </Grid>
    </Grid>
    </Box >
  );
}

export default App;
