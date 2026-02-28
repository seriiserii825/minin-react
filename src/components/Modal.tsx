export default function Modal() {
  return (
    <>
      <div className="fixed inset-0 top-0 left-0 w-full h-full bg-black/90 z-50"></div>
      <div className="flex items-center justify-center fixed inset-0 z-70">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">Modal</div>
      </div>
    </>
  );
}
