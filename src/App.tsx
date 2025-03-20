import { Box } from '@mui/material'
import './App.css'
import HistoricCard from './components/HistoricCard'
import ProfileCard from './components/ProfileCard'
import SearchBarCard from './components/SearchBarCard'

function App() {

  return (
    <Box sx={{ display: "flex", gap: 2, padding: 2 }}>
      <Box sx={{ flex: 1, gap:2, padding:2, display:"flex", flexDirection:"column" }}>
        <SearchBarCard />
        <HistoricCard />
      </Box>

      <Box sx={{ flex: 1 }}>
        <ProfileCard />
      </Box>

    </Box>
  )
}

export default App
