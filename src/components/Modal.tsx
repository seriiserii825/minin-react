interface ModalProps {
  title: string;
  children: React.ReactNode;
}

export default function Modal({ title, children }: ModalProps) {
  return (
    <div className="flex items-center justify-center fixed inset-0 z-50">
      <div className="fixed inset-0 top-0 left-0 w-full h-full bg-black/90 z-50"></div>
      <div className="flex items-center justify-center fixed inset-0 z-70">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}
