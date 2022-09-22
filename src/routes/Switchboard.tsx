import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CreateEventPage } from "../pages/CreateEventPage";
import { HomePage } from "../pages/HomePage";

export interface SwitchboardProps {}

export const Switchboard: React.VFC<SwitchboardProps> = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/new" element={<CreateEventPage />} />
      </Routes>
    </BrowserRouter>
  </>
);
