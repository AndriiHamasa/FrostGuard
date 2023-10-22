import { Route, Routes } from "react-router-dom"
import Layout from "./shared/components/Layout/Layout"
import MainPage from "./pages/MainPage/MainPage"
import SavedPage from "./pages/SavedPage/SavedPage"
import MapPage from "./pages/MapPage/MapPage"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="*" element={<MainPage />} />
      </Route>
    </Routes>
  )
}

export default App
