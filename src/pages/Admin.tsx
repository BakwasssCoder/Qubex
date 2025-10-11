import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";
import { toast } from "sonner";
import { logout } from "@/utils/auth";

const Admin = () => {
  const { orders, coverageAreas, updateOrderStatus, toggleCoverageArea } = useAppContext();
  const [newOrder, setNewOrder] = useState({ customer: "", item: "", status: "Pending", date: new Date().toISOString().split('T')[0] });
  const [newArea, setNewArea] = useState({ name: "", pincode: "", active: true });
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("You have been logged out successfully.");
    navigate("/admin/login");
  };

  const handleAddOrder = () => {
    // In a real app, you would add validation here
    // For now, we'll just reset the form
    setNewOrder({ customer: "", item: "", status: "Pending", date: new Date().toISOString().split('T')[0] });
  };

  const handleAddArea = () => {
    // In a real app, you would add validation here
    // For now, we'll just reset the form
    setNewArea({ name: "", pincode: "", active: true });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20 container mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your delivery operations</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">{orders.length}</h3>
            <p className="text-muted-foreground">Total Orders</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">{orders.filter(o => o.status === "Pending").length}</h3>
            <p className="text-muted-foreground">Pending Orders</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">{orders.filter(o => o.status === "Delivered").length}</h3>
            <p className="text-muted-foreground">Completed Today</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-panel p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Recent Orders</h2>
              <Button variant="outline">View All</Button>
            </div>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="flex justify-between items-center p-4 border-b border-border">
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">{order.item}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${
                      order.status === "Delivered" ? "text-green-500" : 
                      order.status === "In Transit" ? "text-blue-500" : "text-yellow-500"
                    }`}>
                      {order.status}
                    </p>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Coverage Areas</h2>
              <Button variant="outline">Manage Areas</Button>
            </div>
            <div className="space-y-4">
              {coverageAreas.map((area) => (
                <div key={area.id} className="flex justify-between items-center p-4 border-b border-border">
                  <div>
                    <p className="font-medium">{area.name}</p>
                    <p className="text-sm text-muted-foreground">{area.pincode}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      area.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {area.active ? "Active" : "Inactive"}
                    </span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => toggleCoverageArea(area.id)}
                    >
                      {area.active ? "Deactivate" : "Activate"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/">
            <Button variant="outline">Back to Website</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;