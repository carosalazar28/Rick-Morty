import header from '../template/header'
import home from '../pages/home'
import character from '../pages/character'
import error404 from '../pages/error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': home,
    '/:id': character,
    '/contact': 'Contact',
}

const router = async () => {
    const headere = null || document.getElementById('header')
    const content = null || document.getElementById('content')

    headere.innerHTML = await header()
}

export default router