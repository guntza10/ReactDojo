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
>
> ## **`Hook`**
>
> => เราสามารถใช้ `state` และ `feature อื่นๆของ react `ได้โดยที่ไม่ต้องเขียนเป็น `class component` อีกต่อไป สามารถนำมาเขียนใน `functional component` ได้
