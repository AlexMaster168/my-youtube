import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState
} from 'react'
import { AuthService } from '@/services/auth/auth.service'
import { IAuthData } from '@/services/types/auth.interface'

interface IContext extends IAuthData {
	setData: Dispatch<SetStateAction<IAuthData>> | null
}

export const AuthContext = createContext<IContext>({} as IContext)

export const defaultValue = {
	user: null,
	accessToken: ''
}

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [data, setData] = useState<IAuthData>(defaultValue)

	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) {
			const user = JSON.parse(localStorage.getItem('user') || '')
			setData({
				user,
				accessToken
			})
		}
	}, [])

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (!accessToken && !data.user) {
			AuthService.logout()
			setData(defaultValue)
		}
	}, [data.user, pathname])

	return (
		<AuthContext.Provider value={{ ...data, setData }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
