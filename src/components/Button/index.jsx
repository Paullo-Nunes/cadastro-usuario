import { Button } from "./styles"

function defaultButton({ children, ...props }) {
    // spread operator -> todo o resto

    console.log(props)

    return (
        <Button>{children}</Button>
    )

}

export default defaultButton