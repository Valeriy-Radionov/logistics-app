import "animate.css/animate.min.css"
import { useAppSelector } from "../../../common/utils/hooks/appHooks"
import { Transportation } from "./cargo/Transportation"
import style from "./Main.module.scss"

export const Main = () => {
  const stateHeder = useAppSelector((state) => state.dataPages.headerPages[0])
  const state = useAppSelector((state) => state.dataPages.transportationGoods)
  const services = useAppSelector((state) => state.dataPages.transportAndServices)

  return (
    <div id={`${stateHeder}`} className={style.mainBlock}>
      <div className={style.image}>
        <div className={style.container}>
          <div className={style.items}>
            <h2>{services.servicesTitle}</h2>
            <ul>
              {services.services.map((el) => {
                return <li key={el}>{el}</li>
              })}
            </ul>
          </div>
          <div className={`${style.items}`}>
            <h2>{state.title}</h2>
            <ul>
              {state.items.map((el) => {
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
