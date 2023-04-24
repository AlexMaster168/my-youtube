import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

interface UseOutsideProps {
	ref: any
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export default function useOutside(initialVisible: boolean): UseOutsideProps {
	const [isShow, setIsShow] = useState(initialVisible)
	const ref = useRef<HTMLElement>(null)

	const handleClickOutside = (event: Event) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, false)
		}
	})
	return { ref, isShow, setIsShow }
}
