import { useAppSelector } from "../../../common/utils/hooks/appHooks"
import style from "./Footer.module.scss"
export const Footer = () => {
  const title = useAppSelector((state) => state.dataPages.aboutUs.title)
  const stateHeder = useAppSelector((state) => state.dataPages.headerPages[3])

  return (
    <div id={`${stateHeder}`} className={style.wrapper}>
      <div className={style.container}>
        <div className={style.footerBlock}>
          <div className={style.logoBlock}>
            <div className={style.logo}>{title}</div>
            <div className={style.logo}>
              <div style={{ color: "#8e7aff" }}>R</div>
              <div style={{ color: "#52f765" }}>I</div>
              <div style={{ color: "#def752" }}>D</div>
              <div style={{ color: "#eb4015" }}>E</div>
              <div style={{ color: "#026cbd" }}>R</div>
            </div>
          </div>

          <div className={style.address}>
            <div>RIDER Sp. z o.o.</div>
            <div>
              <span>Address</span>: ul. Elizy Orzeszkowej 32/408A,
            </div>
            <div> 15-084 Białystok, Poland</div>
            <div>NIP 9662164018</div>
            <div>REGON 522242354</div>
            <div>KRS 0000976016</div>
          </div>

          <div className={style.contacts}>
            <div className={style.email}>
              <div></div>
              <a href="mailto:office@rider24.pl">office@rider24.pl</a>
            </div>
            <div className={style.skype}>
              <div></div>
              <a href="skype:mr@rider24.pl?chat">mr@rider24.pl</a>
            </div>
            <div className={style.phone}>
              <div></div>
              <a href="tel:+48573826782">+48 573 826 782</a>
            </div>
          </div>
        </div>
        <div className={style.mobAddress}>Address: ul. Elizy Orzeszkowej 32/408A, 15-084 Białystok. NIP 9662164018. REGON 522242354. KRS 0000976016.</div>
      </div>
    </div>
  )
}
