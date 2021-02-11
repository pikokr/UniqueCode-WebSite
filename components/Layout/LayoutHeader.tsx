import React, { Component } from 'react'
import Link from 'next/link'
import styles from '../../styles/layout.module.css'

class LayoutHeader extends Component<
  any,
  {
    navBorder: boolean
  }
> {
  handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!this.state.navBorder) {
        this.setState({ navBorder: true })
      }
    } else {
      if (this.state.navBorder) {
        this.setState({ navBorder: false })
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  state = {
    navBorder: false,
  }

  render() {
    return (
      <div
        className={`bg-white h-16 fixed border-b bg-opacity-70 w-full left-0 top-0 transition-all ${
          styles.header__bg
        } ${this.state.navBorder ? 'border-gray-300' : 'border-transparent'}`}>
        <div
          className="flex px-4 container mx-auto h-full"
          style={{ alignItems: 'center' }}>
          <Link href="/">
            <a href="/" className="text-xl font-bold">
              UniqueCode
            </a>
          </Link>
          <div className="flex-grow" />
          <div>메뉴</div>
        </div>
      </div>
    )
  }
}

export default LayoutHeader
