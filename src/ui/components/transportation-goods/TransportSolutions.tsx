import { useAppSelector } from "../../../common/utils/hooks/appHooks"
import style from "./TransportSolutions.module.scss"
export const TransportSolutions = () => {
  const location = useAppSelector((state) => state.dataPages.geography)
  const stateHeder = useAppSelector((state) => state.dataPages.headerPages[1])
  const state = useAppSelector((state) => state.dataPages.transportAndServices)

  return (
    <div id={`${stateHeder}`} className={style.wrapper}>
      <div className={style.container}>
        <div className={style.items}>
          <div className={style.location}>
            <div className={style.iconBlock}>
              <div className={style.imageLoc}></div>
              <h1>{location.title}</h1>
            </div>
            <ul>
              {location.description.map((el) => {
                return <li key={el}>{el}</li>
              })}
            </ul>
          </div>
          <div className={style.solutions}>
            <h2>{state.transportTitle}</h2>
            <ul>
              {state.transport.map((el) => {
                return <li key={el}>{el}</li>
              })}
            </ul>
          </div>
        </div>
        <div className={style.image}></div>
      </div>
    </div>
  )
}
