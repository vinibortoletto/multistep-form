import { ChangeEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import * as S from './FormStep3.styles'

export default function FormStep3() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name === '') return navigate('/')

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    })
  }, [])

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  const handleNextStep = () => {
    if (state.email === '' || state.github === '') {
      return alert('Por favor, preencha os campos.')
    }

    alert('Cadastro feito com sucesso!')
    navigate('/')
    dispatch({
      type: FormActions.setInitialState,
      payload: ''
    })
  }

  return (
    <Theme>
      <S.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha os campo abaixo com suas informações de contato.</p>

        <hr />

        <label>
          Seu email
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Seu Github
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>

        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </S.Container>
    </Theme>
  )
}
