import { isError } from 'react-query';

const handleError = (status: string, error: unknown): void => {
  if (status === 'error') {
    if (isError(error)) {
      throw error.message;
    }
  }
};

export default handleError;
