import React, {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useState
} from 'react'

interface IData {
	user: {
		id: string
		email: string
	} | null
	refreshToken: string
}

interface IContext extends IData {
	setData: Dispatch<SetStateAction<IData>> | null
}

export const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [data, setData] = useState<IData>({
		// user: {
		// 	id: '0',
		// 	email: 'alex4185@ukr.net'
		// },
		user: null,
		refreshToken: ''
	})

	return (
		<AuthContext.Provider value={{ ...data, setData }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
