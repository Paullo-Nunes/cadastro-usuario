import { Button } from "./styles"

function defaultButton({ children, theme, ...props }) {
    // spread operator -> todo o resto

    console.log(props)

    return (
        <Button {...props} theme={theme}>{children}</Button>
    )

}

export default defaultButton