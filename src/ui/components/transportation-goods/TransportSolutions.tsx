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
          <h2>{state.transportTitle}</h2>
          {state.transport.map((el) => {
            return (
              <ul key={el}>
                <li>{el}</li>
              </ul>
            )
          })}
          <div className={style.location}>
            <div className={style.iconBlock}>
              <div className={style.imageLoc}></div>
              <h1>{location.title}</h1>
            </div>
            <div>{location.description}</div>
          </div>
        </div>
        <div className={style.image}></div>
      </div>
    </div>
  )
}
