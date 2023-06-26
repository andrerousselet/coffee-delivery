import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
