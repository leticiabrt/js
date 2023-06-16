import { ReactNode } from "react"

interface IList{
    children: ReactNode
}

export function Lits({ children }: IList){
    return(
        <li>(children)</li>
    )
}
