import React, { useState, useEffect } from "react"
import rgbToHex from "./utils"

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  // 使用了ES6的解构语法，将组件的props对象解构成了
  // 一个包含rgb、weight、index、hexColor四个属性的对象。
  // 这种写法可以简化代码，并使代码更易读。
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`
  // 用模板字符串将hexColor变量的值转换成一个6位的十六进制颜色值，
  // 并将其赋值给hexValue变量
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])
  // 在3秒后将alert状态设置为false
  // 并在组件卸载或alert状态发生变化时清除定时器

  return (
    <article
      className={`color ${index > 10 && `color-light`}`}
      /* 当index的值大于10时，会添加color-light类名。 */
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
        // 用于将文本复制到剪贴板中
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className='alert'>已复制到剪贴板</p>}
    </article>
  )
}

export default SingleColor