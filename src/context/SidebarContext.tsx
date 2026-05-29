"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextProps {
  selectedKey?: string;
  setSelectedKey: (key: string) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

SidebarContext.displayName = "SidebarContext";

export const SidebarProvider: React.FC<{
  selectedKey?: string;
  children: ReactNode;
}> = ({ selectedKey = "", children }) => {
  const [selectedKeyState, setSelectedKeyState] = useState(selectedKey);

  return (
    <SidebarContext.Provider
      value={{
        selectedKey: selectedKeyState,
        setSelectedKey: setSelectedKeyState,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar debe usarse dentro de un SidebarProvider");
  }

  return context;
};
