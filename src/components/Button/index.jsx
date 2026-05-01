import { Button } from "./styles"

function defaultButton({children}) {
    // spread operator -> todo o resto

    console.log(children)

    return (
        <Button>{children}</Button>
    )

}

export default defaultButton