import { createContext, useContext, useState, ReactNode } from "react";

interface Order {
  id: number;
  customer: string;
  item: string;
  status: string;
  date: string;
}

interface CoverageArea {
  id: number;
  name: string;
  pincode: string;
  active: boolean;
}

interface AppContextType {
  orders: Order[];
  coverageAreas: CoverageArea[];
  addOrder: (order: Omit<Order, "id">) => void;
  updateOrderStatus: (id: number, status: string) => void;
  addCoverageArea: (area: Omit<CoverageArea, "id">) => void;
  toggleCoverageArea: (id: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, customer: "John Doe", item: "Medicine", status: "Pending", date: "2023-05-15" },
    { id: 2, customer: "Jane Smith", item: "Electronics", status: "Delivered", date: "2023-05-14" },
    { id: 3, customer: "Robert Johnson", item: "Groceries", status: "In Transit", date: "2023-05-16" },
  ]);

  const [coverageAreas, setCoverageAreas] = useState<CoverageArea[]>([
    { id: 1, name: "Hyderabad", pincode: "500001", active: true },
    { id: 2, name: "Delhi", pincode: "110001", active: true },
    { id: 3, name: "Mumbai", pincode: "400001", active: false },
  ]);

  const addOrder = (order: Omit<Order, "id">) => {
    const newOrder = {
      ...order,
      id: Math.max(0, ...orders.map(o => o.id)) + 1,
    };
    setOrders([...orders, newOrder]);
  };

  const updateOrderStatus = (id: number, status: string) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status } : order
    ));
  };

  const addCoverageArea = (area: Omit<CoverageArea, "id">) => {
    const newArea = {
      ...area,
      id: Math.max(0, ...coverageAreas.map(a => a.id)) + 1,
    };
    setCoverageAreas([...coverageAreas, newArea]);
  };

  const toggleCoverageArea = (id: number) => {
    setCoverageAreas(coverageAreas.map(area => 
      area.id === id ? { ...area, active: !area.active } : area
    ));
  };

  return (
    <AppContext.Provider value={{
      orders,
      coverageAreas,
      addOrder,
      updateOrderStatus,
      addCoverageArea,
      toggleCoverageArea,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};