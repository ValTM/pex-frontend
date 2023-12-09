import { Alert, Button, Snackbar, Tooltip, Typography } from '@mui/material';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  RestartAlt,
} from '@mui/icons-material';
import { decrement, increment, reset } from './service/service.js';
import React, { useState } from 'react';

const defaultError = 'Error when changing counter value';

export const Counter = ({ index, name, uuid }) => {
  const [count, setCount] = useState(0);
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackError, setSnackError] = useState(defaultError);

  const handleServiceError = (e) => {
    if (e.isAxiosError) {
      if (e.code === 'ERR_NETWORK') {
        setSnackError('Network error');
      } else {
        const { error } = e.response.data;
        setSnackError(error[0].toUpperCase() + error.substring(1));
      }
    }
    setSnackOpen(true);
  };

  return (
    <div
      className={`flex p-2 justify-between border-b-2 ${
        index % 2 !== 0 && 'border-l-2'
      }`}
    >
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={snackOpen}
        autoHideDuration={5000}
        onClose={() => {
          setSnackOpen(false);
        }}
      >
        <Alert severity="error">{snackError}</Alert>
      </Snackbar>
      <Typography variant="h5" className="truncate max-w-[45%]">
        <Tooltip title={name}>
          {/*escape the double quotes*/}
          {`Counter "${name}"`}
        </Tooltip>
      </Typography>
      <div className="flex gap-2 pl-5">
        <Typography variant="h5">{count}</Typography>
        <Tooltip title="Increment counter">
          <Button
            onClick={async () => {
              try {
                setCount(await increment(name, uuid));
              } catch (e) {
                handleServiceError(e);
              }
            }}
          >
            <KeyboardArrowUp />
          </Button>
        </Tooltip>
        <Tooltip title="Decrement counter">
          <Button
            onClick={async () => {
              try {
                setCount(await decrement(name, uuid));
              } catch (e) {
                handleServiceError(e);
              }
            }}
          >
            <KeyboardArrowDown />
          </Button>
        </Tooltip>
        <Tooltip title="Reset counter">
          <Button
            onClick={async () => {
              try {
                setCount(await reset(name, uuid));
              } catch (e) {
                handleServiceError(e);
              }
            }}
          >
            <RestartAlt />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};
