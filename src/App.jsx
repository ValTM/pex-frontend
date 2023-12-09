import React, { useRef, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Counter } from './Counter.jsx';

const myuuid = uuidv4();

const App = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputError, setInputError] = useState('');
  const [counters, setCounters] = useState([]);
  const inputRef = useRef('');
  return (
    <div className="max-w-6xl m-auto text-center p-2">
      <Typography variant="h1">Counters</Typography>
      <div className="border-2 rounded-md p-3 mb-5 mt-10">
        {!showInput && (
          <Button
            className="min-h-[56px]"
            variant="contained"
            onClick={() => setShowInput(!showInput)}
          >
            Add new counter
          </Button>
        )}
        {showInput && (
          <>
            <Box component="form" className="flex gap-3 justify-center">
              <TextField
                required
                variant="outlined"
                label="Counter name"
                inputRef={inputRef}
              />
              <Button
                variant="contained"
                onClick={() => {
                  const newCounters = counters;
                  let value = inputRef.current.value;
                  if (value === '') {
                    setInputError('Value cannot be empty!');
                    return;
                  }
                  if (!counters.includes(value)) {
                    newCounters.push(value.toString());
                    setCounters(newCounters);
                    setShowInput(!showInput);
                    setInputError('');
                  } else {
                    setInputError('Duplicate counter name!');
                  }
                }}
              >
                Add counter
              </Button>
              <Button onClick={() => setShowInput(false)}>Cancel</Button>
            </Box>
            <p className="text-red-600">{inputError}</p>
          </>
        )}
      </div>
      <div className="grid grid-cols-2">
        {counters.map((c, i) => (
          <Counter key={i} index={i} name={c} uuid={myuuid}></Counter>
        ))}
      </div>
    </div>
  );
};

export default App;
