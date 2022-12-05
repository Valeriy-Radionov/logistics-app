import { useAppSelector } from "../../../common/utils/hooks/appHooks"
import style from "./Insurance.module.scss"
export const Insurance = () => {
  const state = useAppSelector((state) => state.dataPages.insurance)
  const stateHeder = useAppSelector((state) => state.dataPages.headerPages[2])

  return (
    <div id={`${stateHeder}`} className={style.wrapper}>
      <div className={style.container}>
        <div className={style.insurance}>
          <div className={style.iconBlock}>
            <div className={style.imageInsurance}></div>
            <h1>{state.title}</h1>
          </div>
          <div>{state.description}</div>
        </div>
        <div className={style.advantages}>
          <h2>{state.advantagesTitle}</h2>
          {state.advantagesText.map((el) => {
            return (
              <ul key={el}>
                <li>{el}</li>
              </ul>
            )
          })}
        </div>
      </div>
    </div>
  )
}
