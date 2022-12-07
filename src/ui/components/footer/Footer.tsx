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
            <div className={style.logo}>RIDER</div>
          </div>
          <div className={style.address}>
            <div>
              <span>Address</span>
            </div>
            <div>Białystok, Poland</div>
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
            <div className={style.phone}>
              <div></div>
              <a href="tel:+48797529867">+48 797 529 867</a>
            </div>
          </div>
        </div>
        <div className={style.mobAddress}>Address: Białystok, Poland</div>
      </div>
    </div>
  )
}
