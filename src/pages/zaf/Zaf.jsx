import { lazy, Suspense } from 'react'
import { useLocation } from '../../hooks/useClient'
import { useNavigation } from '../../contexts/NavigationProvider'
import { DEFAULT_THEME, ThemeProvider } from '@zendeskgarden/react-theming'

const NavbarHome = lazy(() => import('./navbar/Home'))
const TicketsidebarHome = lazy(() => import('./ticketsidebar/Home'))
const TopbarHome = lazy(() => import('./topbar/Home'))
const COMPONENTS = {
    nav_bar: {
        home: NavbarHome
    },
    ticket_sidebar: {
        home: TicketsidebarHome
    },
    top_bar: {
        home: TopbarHome
    }
}

export default function Zaf() {
    const location = useLocation()
    const { page } = useNavigation()

    const Component = COMPONENTS[location]?.[page] || Fallback

    return (
        <ThemeProvider theme={{ ...DEFAULT_THEME }}>
            <Suspense fallback={
                <div className='w-full h-[100vh] flex justify-center items-center'>
                    Loading . . .
                </div>
            }>
                {['ticket_sidebar', 'nav_bar', 'top_bar'].includes(location) ? (
                    <div className='w-full h-[100vh] overflow-auto'>
                        <Component />
                    </div>
                ) : (
                    <div className='w-full h-[100vh] flex justify-center items-center flex-col'>
                        <span>Invalid location</span>
                    </div>
                )}
            </Suspense>
        </ThemeProvider>
    )
}

function Fallback() {
    return <span>Invalid component</span>
}
