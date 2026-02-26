import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage'
import FanStatsPage from './pages/FanStatsPage'
import TicketBuyingPage from './pages/TicketBuyingPage'
import ChatAgentPage from './pages/ChatAgentPage'
import EventRowDemoPage from './pages/EventRowDemoPage'
import DocumentationPage from './pages/docs/DocumentationPage'
import DocHowItWorksPage from './pages/docs/DocHowItWorksPage'
import DocFoundationsPage from './pages/docs/DocFoundationsPage'
import DocTypographyPage from './pages/docs/DocTypographyPage'
import DocSurfacesPage from './pages/docs/DocSurfacesPage'
import DocButtonsPage from './pages/docs/DocButtonsPage'
import DocListRowsPage from './pages/docs/DocListRowsPage'
import DocFormsPage from './pages/docs/DocFormsPage'
import DocNavigationPage from './pages/docs/DocNavigationPage'
import DocReferencePage from './pages/docs/DocReferencePage'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/fan-stats" element={<FanStatsPage />} />
          <Route path="/ticket-buying" element={<TicketBuyingPage />} />
          <Route path="/chat" element={<ChatAgentPage />} />
          <Route path="/event-rows" element={<EventRowDemoPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/documentation/how-it-works" element={<DocHowItWorksPage />} />
          <Route path="/documentation/foundations" element={<DocFoundationsPage />} />
          <Route path="/documentation/typography" element={<DocTypographyPage />} />
          <Route path="/documentation/surfaces" element={<DocSurfacesPage />} />
          <Route path="/documentation/buttons" element={<DocButtonsPage />} />
          <Route path="/documentation/list-rows" element={<DocListRowsPage />} />
          <Route path="/documentation/forms" element={<DocFormsPage />} />
          <Route path="/documentation/navigation" element={<DocNavigationPage />} />
          <Route path="/documentation/reference" element={<DocReferencePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
