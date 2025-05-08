export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-32">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      <p className="ml-4 text-blue-500 font-medium">Loading...</p>
    </div>
  );
}