/* @refresh reload */
import { render } from 'solid-js/web'

import App from './App'
import '@unocss/reset/normalize.css'
import './styles/main.css'
import 'uno.css'
import 'mdui/mdui.css'
import 'mdui'

render(() => <App />, document.getElementById('root') as HTMLElement)
