import { useState } from "react"

const useLoading = (state=false) => {
    const [loading, setLoading] = useState(state)

    const startLoading = () => {
        setLoading(true)
    }

    const stopLoading = () => {
        setLoading(false)
    }
    
    return {loading, startLoading, stopLoading}
}

export default useLoading
