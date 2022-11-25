import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import * as S from './FormStep1.styles'

export default function FormStep1() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, [dispatch])

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  const handleNextStep = () => {
    if (state.name === '') return alert('Por favor, preencha os campos')
    navigate('/step2')
  }

  return (
    <Theme>
      <S.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </S.Container>
    </Theme>
  )
}
