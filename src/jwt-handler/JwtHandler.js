export const JwtHandler = {
    JWT_KEY: "JWT",
    ADMIN: "ADMIN",
    onChangeEvent: new CustomEvent("onJwtChange"),

    onChange: () => {
        window.dispatchEvent(JwtHandler.onChangeEvent);
    },

    setAdmin: value => {
        localStorage.setItem(JwtHandler.ADMIN, value)
    },
    getAdmin: () => {
        return localStorage.getItem(JwtHandler.ADMIN)
    },
    isAdmin: () => JwtHandler.getAdmin()
    ,

    setJwt: value => {
        localStorage.setItem(JwtHandler.JWT_KEY, value);

        JwtHandler.onChange();
    },

    clearJwt: () => {
        localStorage.removeItem(JwtHandler.JWT_KEY);
        localStorage.removeItem(JwtHandler.ADMIN)
        localStorage.removeItem("profile")
        JwtHandler.onChange();
    },

    getJwt: () => {
        return localStorage.getItem(JwtHandler.JWT_KEY);
    },

    isJwtValid: () => Boolean(JwtHandler.getJwt()),
};
