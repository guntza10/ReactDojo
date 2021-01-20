# ReactDojo

> # **`React`**
>
> เป็น Library ของ Javascript ที่เอาไว้พัฒนา Web Application
>
> ## _`Create React Command`_
>
> ```
> npx create-react-app "Project Name"
> ```
>
> `Reference : ` https://github.com/facebook/create-react-app/
>
> ## **`Structure`**
>
> ### _`node_modules`_
>
> => เป็น folder ที่เก็บ package ต่างๆของ node รวมถึง package React ที่เราจะเอาไปสร้าง Component ต่างๆ
>
> ### _`public`_
>
> => เป็น folder ที่เก็บไฟล์ public ต่างๆ เช่น index.html,พวกรูปภาพ,โลโก้
>
> ### _`src`_
>
> => เป็น folder ที่เราใช้ในการทำงานต่างๆบน React
>
> ### _`package.json`_
>
> => เป็นไฟล์ที่มีรายละเอียดพวก dependency ต่างๆที่เราลง,script ต่างๆที่เราใช้ run,เครื่องมือ tool ต่างๆที่ถูก set ไว้ในตัว project นี้
>
> ### _`App.js`_
>
> => เป็นไฟล์ root component (`component หลัก`)
>
> ### _`index.js`_
>
> => เป็นไฟล์ที่เอาไว้ render root component (`App.js`) ให้ไปแสดงแทนที่ `<div id="root"></div> ` ใน main template (`index.html`)
>
> ![indexJs](img/indexJs.PNG)
>
> ### _`index.html`_
>
> => เป็นไฟล์ main template
>
> ![indexHtml](img/indexHtml.PNG)
>
> `Note : ` flow react => index.html -> index.js -> App.js
>
> ## **`Component`**
>
> => เป็นส่วนประกอบเล็กๆที่นำมาประกอบกันเพื่อสร้างหน้า web application โดยที่แต่ละ component จะทำงานแยกกันโดยสิ้นเชิง และใน 1 component สามารถมี component ย่อยอยู่ข้างในได้ด้วย
>
> `Note : `React ใช้ Syntax `JSX` คือ Javascript XML ที่จะทำให้เราสามารถเขียน HTML บน Javascript ได้ ซึ่ง compile ผ่าน Babel
>
> `Note : ` การเขียน `( )` ครอบ JSX จะทำให้เราสามารถเขียน JSX หลายบรรทัดได้
>
> `Note : ` การเขียน class css บน React เราใช้ attribute `className` แทน `class` ปกติ
>
> ### _`Component Type`_
>
> => มี 2 แบบ
>
> 1. `Stateless Functional Component` => เป็น Component ที่สร้างจาก function javascript และ render ผ่านการ return `JSX`
> 2. `Stateful Class Component` => เป็น Component ที่สร้างจาก Class ES6 ของ javascript ที่ inherit Component Class จาก React Library และ render ผ่าน method `render()`
>
> ![componentType](img/componentType.PNG)
>
> ### _`Functional Component`_
>
> => คือ function javascript ที่รับค่าเข้ามาผ่าน `prop` และ return `JSX` ออกไปเป็น `UI`
>
> `Note : ` สามารถเขียนเป็น Arrow Function ได้
>
> ![functionComponent](img/functionComponent.PNG)
>
> ### _`Class Component`_
>
> => คือ class es6 javascript ที่รับค่าเข้ามาผ่าน `prop` และ return `JSX` ออกไปเป็น `UI`
>
> ## **`State & Prop`**
>
> ### _`State`_
>
> => เป็น object ที่เอาไว้เก็บข้อมูลของ component ถ้า state มีการเปลี่ยนแปลง component จะถูก re-render ใหม่
>
> ### **Approach 1 (function)**
>
> - `useState()` => เอาไว้สร้าง state ให้ component
> - `useState()` => จะ return array ที่เก็บ 2 ค่า คือ value ของ component state , function ในการ set state
>
> ```
> const [input, setInput] = useState("ค่าเริ่มต้นของ state");
> -> input => เป็น current value ของ state
> -> setInput => เป็น function ในการ set state ใหม่
> ```
>
> ![state1](img/state.PNG)
>
> ### **Approach 2 (class)**
>
> - สร้างผ่าน property `state` ที่ inherit มาจาก Component(React)
> - set state ผ่าน `this.setState()` ที่ inherit มาจาก Component(React)
> - concept state จะเหมือนกับ Approach 1 คือมี current value ของ state, function ในการ set state ใหม่ให้ component
>
> ![state2](img/state2.PNG)
>
> `Note : ` ทุก component จะต้องมี state ของตัวเอง
>
> ### _`Prop`_
>
> => คือ property ที่เอาไว้ pass data ระหว่าง component โดยใช้ HTML attribute (`การส่ง data ระหว่าง component`)
>
> ### **Approach 1 (function)**
>
> ![prop1](img/prop1.PNG)
>
> ![prop2](img/prop2.PNG)
>
> ### **Approach 2 (class)**
>
> ![prop3](img/prop3.PNG)
>
> - มันจะเรียกค่า prop ผ่าน `this.props` ที่ inherit จาก Component (React)
> - `this.props` มันเป็น read-only ไม่สามารถ assign ค่าให้มันได้ ทำให้ถ้าเราอยากเปลี่ยนค่า prop เราจะต้องทำผ่าน prop ที่เป็น function แล้วให้มันเปลี่ยนค่า property ของ state ที่ parent component แทน
>
> ### _`PropTypes`_
>
> => เอาไว้เช็ค `Prop` ที่ส่งเข้ามาว่าถูกต้องรึเปล่า ใน `PropTypes` จะประกอบไปด้วย Validator มากมายเลย (`เอาไว้ทำ Validate`)
>
> ![propTypes](img/propTypes.PNG)
>
> `Note : ` PropTypes ไม่มีใน React ต้องลงเพิ่ม
>
> ```
> npm i prop-types --save
>
> --save เพื่อให้มัน save ลงบน package.json
> ```
>
> ## **`Handling Events`**
>
> => `event` ใน `react` จะเป็น `camel case` ที่ขึ้นต้นด้วย `on` เช่น `onClick`, `onChange`, `onKeyDown`
>
> ## **`Render (ใช้สำหรับที่เป็น Function Hook?)`**
>
> `Note : ` การ render component ที่เป็น Array จะต้องมี Unique Key ประจำ child component เพื่อที่ React จะได้รู้ว่าจะต้องไป render child component ตัวไหน
>
> ## **`React Component Life Cycle (ใช้สำหรับที่เป็น Class?)`**
>
> 1. Mounting
>    => คือช่วงที่เปิดหน้าเว็บขึ้นมา component ต่างๆจะถูก Initialize
> 2. Updating
>    => คือช่วงที่เรามีการ interact กับ component นั้นๆ แล้วทำให้เกิดการเปลี่ยนแปลง
> 3. Unmounting
>    => คือช่วงที่เราปิดหน้าเว็บ หรือ มีการเปลี่ยนหน้าเว็บแล้ว component นั้นได้หายไป
>
> ![lifeCycle](img/lifeCycle.PNG)
>
> `Note : ` function ต่างๆในแต่ละ life cycle เป็นความสามารถที่ inherit มาจาก Component ที่ `import { Component } from 'react';`
>
> ## **`React Routing`**
>
> => เป็นการกำหนด route path ของการเปลี่ยนหน้า page (`กำหนด route path ให้ component เพื่อกำหนดว่า route นี้จะเอา component ไหนมา render`)
>
> `Note : `
>
> ```
> npm install react-router-dom
> ```

> `Note : ` ความรู้ใหม่
>
> ```
> <input /> => self closing tag => ใช้สำหรับ tag element ที่ไม่ต้องมี content ด้านใน เช่น input,img,link,hr เป็นต้น
>
> <div> </div> => closing tag => ใช้สำหรับ tag element ที่ต้องมี content ด้านใน
> ```
