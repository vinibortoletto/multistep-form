import { Link } from 'react-router-dom'
import profileIcon from '../../assets/profile.svg'
import bookIcon from '../../assets/book.svg'
import mailIcon from '../../assets/mail.svg'
import * as S from './SidebarItem.styles'

type Props = {
  title: string
  description: string
  icon: string
  path: string
  active: boolean
}

const SidebarItem = ({ title, description, icon, path, active }: Props) => {
  return (
    <S.Container>
      <Link to={path}>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>

        <S.IconArea active={active}>
          {icon === 'profile' && <img src={profileIcon} alt="" />}
          {icon === 'book' && <img src={bookIcon} alt="" />}
          {icon === 'mail' && <img src={mailIcon} alt="" />}
        </S.IconArea>

        <S.Point active={active} />
      </Link>
    </S.Container>
  )
}

export default SidebarItem
