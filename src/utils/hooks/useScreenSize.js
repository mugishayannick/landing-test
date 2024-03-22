import { useWindowResize } from './useWindowResize'

const useScreenSizes = () => {
    const { width } = useWindowResize()
    const isMobile = width <= 765
    return { isMobile }
}

export default useScreenSizes
