interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return;

  return (
    <div className="bg-destructive/10 px-4 py-3 rounded-md text-destructive border border-destructive/30">
      <p>{message}</p>
    </div>
  );
};
