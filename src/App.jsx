import React from 'react';
import './App.css';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="employee-salary-calculation">
          การคำนวณรายได้ต่อปีของพนักงาน
        </header>

        <header className="employee-id">
          รหัสพนักงาน
        </header>

        <Input placeholder="Type employee ID here…" />

        <header className="employee-name">
          ชื่อพนักงาน
        </header>

        <Input placeholder="Type employee name here…" />

        <Button variant="contained">คำนวณ</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;




