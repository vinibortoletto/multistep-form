import { createContext, ReactNode, useContext, useReducer } from 'react'

type State = {
  currentStep: number
  name: string
  level: 0 | 1
  email: string
  github: string
}

type Action = {
  type: FormActions
  payload: any
}

type Context = {
  state: State
  dispatch: (action: Action) => void
}

type Props = {
  children: ReactNode
}

const initialState = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: ''
}

const FormContext = createContext<Context | undefined>(undefined)

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
  setInitialState
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload }
    case FormActions.setName:
      return { ...state, name: action.payload }
    case FormActions.setLevel:
      return { ...state, level: action.payload }
    case FormActions.setEmail:
      return { ...state, email: action.payload }
    case FormActions.setGithub:
      return { ...state, github: action.payload }
    case FormActions.setInitialState:
      return { ...initialState }
    default:
      return state
  }
}

export const FormProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const value = { state, dispatch }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const useForm = () => {
  const context = useContext(FormContext)

  if (context === undefined) {
    throw new Error('useForm must be used inside FormProvider')
  }

  return context
}
