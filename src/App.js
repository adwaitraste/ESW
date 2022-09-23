import * as React from 'react';
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

const data = {
  labels: ["Car", "Bike_Car", "Human", "Van", "SUV", "Sedan"],
  datasets: [
    {
      label: "Accuracy",
      data: [87, 93, 85, 61, 54, 75],
      fill: false,
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};

const top100Films = [
  { label: 'Bicycle' },
  { label: 'Bike' },
  { label: 'Bike_Car' },
  { label: 'Car' },
  { label: 'Hatchback' },
  { label: 'Human' },
  { label: 'Human_Car' },
  { label: 'Sedan' },
  { label: 'SUV' },
  { label: 'Truck' },
  { label: 'Van' },
];


function App() {
  Chart.register(CategoryScale);

  return (
    <Box>
      <Grid container spacing={2} sx={{ p: 4 }} align="center" justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h3" sx={{ pt: 8 }}>
            Object Classifier
          </Typography>
          <Typography variant="h6" sx={{ py: 4 }}>
            Choose your Dataset Below
          </Typography>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300, pb: 4 }}
            renderInput={(params) => <TextField {...params} label="Class" />}
          />

          <Line data={data} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
