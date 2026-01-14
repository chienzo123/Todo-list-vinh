type Props = { message?: string };

const ErrorMsg = ({ message }: Props) => {
  if (!message) return null;

  return <p className="mt-1 text-sm text-red-500">{message}</p>;
};

export default ErrorMsg;
