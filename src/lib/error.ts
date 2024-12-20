interface ErrorResponse {
  response?: {
    data?: {
      message?: string;
      error?: string;
      errors?: string[];
    };
  };
  message?: string;
}

export const errorCatch = (error: ErrorResponse): Error => {
  const message =
    error.response?.data?.message ||
    error.response?.data?.error ||
    error.response?.data?.errors?.[0] ||
    error.message ||
    "Unknown error occurred";

  const errorMessage = typeof message === "object" ? message[0] : message;

  return new Error(errorMessage);
};
