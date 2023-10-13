import api from "./axios"

export const getSlider = () => {
    return api.get("/slider")
}