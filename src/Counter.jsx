import { Button, Snackbar, Tooltip, Typography } from '@mui/material';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  RestartAlt,
} from '@mui/icons-material';
import { decrement, increment, reset } from './service/service.js';
import React, { useState } from 'react';

export const Counter = ({ index, name, uuid }) => {
  const [count, setCount] = useState(0);
  const [snackOpen, setSnackOpen] = useState(false);
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
        message="I love snacks"
      />
      <Typography variant="h5">
        {/*escape the double quotes*/}
        {`Counter "`}
        {name}
        {`"`}
      </Typography>
      <div className="flex gap-2">
        <Typography variant="h5">{count}</Typography>
        <div>
          <Tooltip title="Increment counter">
            <Button
              onClick={async () => {
                try {
                  setCount(await increment(name, uuid));
                } catch (e) {
                  //TODO show counter error
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
                  //TODO show counter error
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
                  //TODO show counter error
                }
              }}
            >
              <RestartAlt />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
