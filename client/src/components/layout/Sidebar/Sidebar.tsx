import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { defaultValue } from '@/providers/AuthProvider'
import { AuthService } from '@/services/auth/auth.service'
import Logo from '@/images/common/logo.png'
import { useAuth } from '@/hooks/useAuth'
import Line from '@/components/ui/Line'
import ProfileInfo from '@/components/layout/Sidebar/profileInfo/ProfileInfo'
import Menu from '@/components/layout/Sidebar/Menu/Menu'

const Sidebar: FC | null = () => {
	const { user, setData } = useAuth()

	const handleLogout = () => {
		AuthService.logout()
		if (setData) setData(defaultValue)
	}

	return user && (
		<section className='sidebar'>
			<Link href='/' className='logo'>
				<Image src={Logo} alt='Youtube' width={130} height={42} />
			</Link>
      <ProfileInfo/>
			<Line/>
			<Menu/>
			<button id='logout_btn' onClick={() => handleLogout()}>
				Вийти
			</button>
			<div className='copy'>AlexMaster © 2023 UaTube</div>
		</section>
	)
}

export default Sidebar
