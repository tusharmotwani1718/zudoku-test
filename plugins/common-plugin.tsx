import type { ZudokuPlugin } from "zudoku";

export const myPlugin: ZudokuPlugin = {
  initialize: async (context) => {
    console.log("Initializing my plugin with context:", context);
    // Perform any necessary setup or initialization here
  },
  getHead: () => {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
        />
      </>
    );
  },
};
