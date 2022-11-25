import { FormStep1, FormStep2, FormStep3 } from './pages'
import { Route, Routes } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<FormStep1 />} />
      <Route path="/step2" element={<FormStep2 />} />
      <Route path="/step3" element={<FormStep3 />} />
    </Routes>
  )
}
