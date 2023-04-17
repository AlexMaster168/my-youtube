import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<title>Youtube</title>
				<link
					href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap'
					rel='stylesheet'
				/>
				<link rel='shortcut icon' href='/favicon.png' type='image/png' />
				<meta name='description' content='Youtube v2.0 - Best video' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1'
				/>
				<meta name='theme-color' content='#CD313A' />
				<meta name='msapplication-navbutton-color' content='#CD313A' />
				<meta name='apple-mobile-web-app-status-bar-style' content='#CD313A' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
