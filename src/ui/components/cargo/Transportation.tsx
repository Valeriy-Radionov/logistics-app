import { useAppSelector } from "../../../common/utils/hooks/appHooks"
import negaCargo from "../../../common/assets/negab.jpg"
import dangerousCargo from "../../../common/assets/danger.jpg"
import progectCargo from "../../../common/assets/progect.jpg"
import consCargo from "../../../common/assets/sbornie.png"
import style from "./Transportation.module.scss"
export const Transportation = () => {
  const cargo = useAppSelector((state) => state.dataPages.transportation)
  return (
    <>
      <div className={style.title}>{cargo.title}</div>
      <div className={style.imgCargo}>
        <div>
          <img alt="01" src={negaCargo} />
          <div style={{ height: "50px" }}>{cargo.value[0]}</div>
        </div>
        <div>
          <img alt="02" src={dangerousCargo} />
          <div style={{ height: "50px" }}>{cargo.value[1]}</div>
        </div>
        <div>
          <img alt="03" src={progectCargo} />
          <div style={{ height: "50px" }}>{cargo.value[2]}</div>
        </div>
        <div>
          <img alt="04" src={consCargo} />
          <div style={{ height: "50px" }}>{cargo.value[3]}</div>
        </div>
      </div>
    </>
  )
}
