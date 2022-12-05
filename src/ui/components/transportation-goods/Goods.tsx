import { useAppSelector } from "../../../common/utils/hooks/appHooks"
import style from "./Goods.module.scss"
export const Goods = () => {
  const location = useAppSelector((state) => state.dataPages.geography)
  const state = useAppSelector((state) => state.dataPages.transportationGoods)
  const stateHeder = useAppSelector((state) => state.dataPages.headerPages[1])

  return (
    <div id={`${stateHeder}`} className={style.wrapper}>
      <div className={style.container}>
        <div className={style.items}>
          <h2>{state.title}</h2>
          <div className={style.mobile}></div>
          {state.items.map((el) => {
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
