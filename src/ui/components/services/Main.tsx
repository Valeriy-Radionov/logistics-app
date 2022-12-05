import "animate.css/animate.min.css"
import { useAppSelector } from "../../../common/utils/hooks/appHooks"
import { Transportation } from "../cargo/Transportation"
import style from "./Main.module.scss"

export const Main = () => {
  const state = useAppSelector((state) => state.dataPages.transportAndServices)
  const stateHeder = useAppSelector((state) => state.dataPages.headerPages[0])
  return (
    <div id={`${stateHeder}`} className={style.mainBlock}>
      <div className={style.image}>
        <div className={style.container}>
          <div className={style.items}>
            <h2>{state.servicesTitle}</h2>
            <ul>
              {state.services.map((el) => {
                return <li key={el}>{el}</li>
              })}
            </ul>
          </div>
          <div className={`${style.items}`}>
            <h2>{state.transportTitle}</h2>
            <ul>
              {state.transport.map((el) => {
                return <li key={el}>{el}</li>
              })}
            </ul>
          </div>
        </div>
        <div className={style.cargo}>
          <Transportation />
        </div>
      </div>
    </div>
  )
}
