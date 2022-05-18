import { LottieCustom } from "../LottieCustom/LottieCustom"
import "./styles.scss"

type IProps = {
    children: any
}

const PageLoginAndCadastro = ({ children }: IProps) => {
    return (
        <div className="d-flex">
            <div className="divWelcome">
                <LottieCustom name="welcome" />
            </div>
            <div className="divConteudo">
                {children}
            </div>
        </div>
    )
}

export { PageLoginAndCadastro }