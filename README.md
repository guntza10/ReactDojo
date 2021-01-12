# ReactDojo

> ## **`React`**
>
> เป็น Library ของ Javascript ที่เอาไว้พัฒนา Web Application
>
> ### **`Structure`**
> #### _`node_modules`_
> => เป็น folder ที่เก็บ package ต่างๆของ node รวมถึง package React ที่เราจะเอาไปสร้าง Component ต่างๆ
> #### _`public`_
> => เป็น folder ที่เก็บไฟล์ public ต่างๆ เช่น index.html,พวกรูปภาพ,โลโก้
> #### _`src`_
> => เป็น folder ที่เราใช้ในการทำงานต่างๆบน React
> #### _`package.json`_
> => เป็นไฟล์ที่มีรายละเอียดพวก dependency ต่างๆที่เราลง,script ต่างๆที่เราใช้ run,เครื่องมือ tool ต่างๆที่ถูก set ไว้ในตัว project นี้
> #### _`App.js`_
>
> => เป็นไฟล์ root component (`component หลัก`)
>
> #### _`index.js`_
>
> => เป็นไฟล์ที่เอาไว้ render root component (`App.js`) ให้ไปแสดงแทนที่ `<div id="root"></div> ` ใน main template (`index.html`)
>
> ![indexJs](img/indexJs.PNG)
>
> #### _`index.html`_
>
> => เป็นไฟล์ main template
>
> ![indexHtml](img/indexHtml.PNG)
>
> ### **`Component`**
> => เป็นส่วนประกอบเล็กๆที่นำมาประกอบกันเพื่อสร้างหน้า web application โดยที่แต่ละ component จะทำงานแยกกันโดยสิ้นเชิง และใน 1 component สามารถมี component ย่อยอยู่ข้างในได้ด้วย
>
> `Note : `React ใช้ Syntax JSX คือ Javascript XML ที่จะทำให้เราสามารถเขียน HTML บน Javascript ได้ ซึ่ง compile ผ่าน Babel
>
> `Note : ` การเขียน `( )` ครอบ JSX จะทำให้เราสามารถเขียน JSX หลายบรรทัดได้
>
> `Note : ` การเขียน class css บน React เราใช้ attribute `className` แทน `class` ปกติ
> ### **`State & Prop`**
> #### *`State`*
> => เป็น object ที่เอาไว้เก็บข้อมูลของ component ถ้า state มีการเปลี่ยนแปลง component จะถูก re-render ใหม่
> - `useState` => เอาไว้สร้าง state ให้ component
>
> ![state](img/state.PNG)
> #### *`Prop`*
> => คือ property ที่เอาไว้ pass data ระหว่าง component โดยใช้ HTML attribute
>
> ![prop1](img/prop1.PNG)
>
> ![prop2](img/prop2.PNG)
> #### *`PropTypes`*
> => เอาไว้เช็ค `Prop` ที่ส่งเข้ามาว่าถูกต้องรึเปล่า ใน `PropTypes` จะประกอบไปด้วย Validator มากมายเลย (`เอาไว้ทำ Validate`)
>
> ![propTypes](img/propTypes.PNG)
> 
> `Note : ` PropTypes ไม่มีใน React ต้องลงเพิ่ม
> ```
> npm i prop-types --save
>
> --save เพื่อให้มัน save ลงบน package.json
> ```
> ### **`Handling Events`**
> => `event` ใน `react` จะเป็น `camel case` ที่ขึ้นต้นด้วย `on` เช่น `onClick`, `onChange`, `onKeyDown`
> ### **`React Component Life Cycle`**
>
> 1. Mounting
>    => คือช่วงที่เปิดหน้าเว็บขึ้นมา component ต่างๆจะถูก Initialize
> 2. Updating
>    => คือช่วงที่เรามีการ interact กับ component นั้นๆ แล้วทำให้เกิดการเปลี่ยนแปลง
> 3. Unmounting
>    => คือช่วงที่เราปิดหน้าเว็บ หรือ มีการเปลี่ยนหน้าเว็บแล้ว component นั้นได้หายไป
>
> ![lifeCycle](img/lifeCycle.PNG)

> `Note : ` ความรู้ใหม่
> ```
> <input /> => self closing tag => ใช้สำหรับ tag element ที่ไม่ต้องมี content ด้านใน เช่น input,img,link,hr เป็นต้น
>
> <div> </div> => closing tag => ใช้สำหรับ tag element ที่ต้องมี content ด้านใน
> ```
