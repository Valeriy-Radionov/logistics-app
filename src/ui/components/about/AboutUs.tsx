import React from "react"
import { useAppSelector } from "../../../common/utils/hooks/appHooks"
import style from "./AboutUs.module.scss"
export const AboutUs = () => {
  const nameCompany = useAppSelector((state) => state.dataPages.aboutUs.title)
  const description = useAppSelector((state) => state.dataPages.aboutUs.description)

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.info}>
          <h1>{nameCompany.toUpperCase()}</h1>
          <div className={style.mobile}></div>
          <div className={style.description}>
            <p className={style.animationText}>RIDER</p>
            {description}
          </div>
        </div>
        <div className={style.aboutUsImg}></div>
      </div>
    </div>
  )
}
