import { Header } from '../../components/Header'
import { ReactNode } from 'react'
import * as S from './Theme.styles'
import { SidebarItem } from '../../components/SidebarItem'
import { useForm } from '../../contexts/FormContext'

type Props = { children: ReactNode }

const Theme = ({ children }: Props) => {
  const { state } = useForm()

  return (
    <S.Container>
      <S.Area>
        <Header />

        <S.Steps>
          <S.Sidebar>
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />

            <SidebarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />

            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
          </S.Sidebar>
          <S.Page>{children}</S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  )
}

export default Theme
