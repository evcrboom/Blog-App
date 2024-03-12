import { ReactElement } from "react"
import { JsxElement } from "typescript"

interface Blog {
    id?: number,
    title?: string,
    image_url?: string,
    content?: string,
    author?: string
}

export default Blog