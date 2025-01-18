import DragDropComponent from '@/components/drag-drop';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-background">
      <div className="flex w-screen h-screen p-10">
        <DragDropComponent />
      </div>
    </main>
  );
}
