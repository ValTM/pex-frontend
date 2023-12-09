# Counter app frontend

## Description

Example frontend for a counter task. 
The counters can increment, decrement and reset.
Each browser tab identifies itself with a UUID, so counters from one tab can not interfere with counters from a different tab.

Technologies used:
- React
- Material UI
- Axios
- UUID generator

On the dev side:
- vite
- Tailwind CSS
- eslint
- prettier

## Running

To run a dev server:

```bash
yarn install
yarn dev
```
To build:
```bash
yarn build
```

## Next steps

- better error handling
- way to identify the tab, instead of random UUID
- ability to delete a counter
