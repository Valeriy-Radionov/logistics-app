import { useAppSelector } from "../../../common/utils/hooks/appHooks"
import style from "./AboutUs.module.scss"
export const AboutUs = () => {
  const nameCompany = useAppSelector((state) => state.dataPages.aboutUs.title)
  const description = useAppSelector((state) => state.dataPages.aboutUs.description)
  const offer = useAppSelector((state) => state.dataPages.aboutUs)
  const stateHeder = useAppSelector((state) => state.dataPages.headerPages[4])

  return (
    <div id={`${stateHeder}`} className={style.wrapper}>
      <div className={style.container}>
        <div className={style.info}>
          <h1>{nameCompany.toUpperCase()}</h1>
          <div className={style.description}>
            <p className={style.animationText}>RIDER</p>
            {description}
          </div>
        </div>
        <div className={style.offer}>
          <h2>{offer.titleOffer}</h2>
          <ul>
            {offer.ourOffer.map((el) => {
              return <li key={el}>{el}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
