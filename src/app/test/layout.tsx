'use client'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function LayoutTest({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center items-center h-screen w-screen">
        {children}
      </div>
    </DndProvider>
  );
}

export default LayoutTest;
