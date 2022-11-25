import { SelectOption } from '../../components/SelectOption'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import * as S from './FormStep2.styles'
import { Link } from 'react-router-dom'

export default function FormStep2() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name === '') return navigate('/')

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, [])

  const handleNextStep = () => {
    if (state.name === '') return alert('Por favor, preencha os campos')
    navigate('/step3')
  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
      <S.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado profissional
          atualmente
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </S.Container>
    </Theme>
  )
}
