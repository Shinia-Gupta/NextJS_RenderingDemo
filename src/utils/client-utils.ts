import "client-only"

export const clientSideFunction = () => { 
    console.log(`
        use window or document objects here,
        use localStorage or sessionStorage here`);
    return "client result"
}