// ----- Health Check Controller -----
// This controller provides a simple endpoint to check the health of the server.
// It uses an async handler to catch any potential errors and pass them to the error handling middleware.

import { asyncHandler } from '../utils/asyncHandler.js';

export const getHealth = asyncHandler(async (req, res) => {
  res.json({
    status: "OK",
    message: "Server is healthy"
  });
});


// ----- Previous implementation using try-catch and custom AppError, now replaced with asyncHandler for cleaner code.

// import { AppError } from '../utils/AppError.js';

// export const getHealth = (req, res, next) => {
//   try {
//     res.json({
//       status: "OK",
//       message: "Server is healthy 🚀"
//     });
//   } catch (error) {
//     next(new AppError("Something went wrong", 500));
//   }
// };