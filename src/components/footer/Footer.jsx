import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from '@heroicons/react/outline'

const Footer = () => {
  return (
    <div className={css.footerWrapper}>
        <hr />

        <div className={css.footer}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>soolsouk</span>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Contact Us</span>
                    <span className={css.secondDetails}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>Safa Park, Westlands</span>
                    </span>
                    <span className={css.secondDetails}>
                        <PhoneIcon className={css.icon}/>
                        <span>+2547890098</span>
                    </span>
                    <span className={css.secondDetails}>
                        <InboxIcon className={css.icon}/>
                        <span>support@soolsouk.com</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Account</span>
                    <span className={css.secondDetails}>
                        <LoginIcon className={css.icon}/>
                        <span>Sign IN</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Company</span>
                    <span className={css.secondDetails}>
                        <UsersIcon className={css.icon}/>
                        <span>About Us</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Resources</span>
                    <span className={css.secondDetails}>
                        <LinkIcon className={css.icon}/>
                        <span>Privacy & Terms</span>
                    </span>
                </div>
            </div>
        </div>

        <div className={css.copyright}>
            <span> Copyright &copy;2024 by Soolsouk</span>
            <br />
            <span>All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Footer