export function isErrorWithMessage(
  error: unknown
): error is { status: string; data: { message: string } } {
  return (
    typeof error === 'object' &&
    error != null &&
    'status' in error &&
    'data' in error &&
    typeof (error as any).data.message === 'string'
  );
}
