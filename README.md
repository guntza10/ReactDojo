# ReactDojo

> ## **`React`**
>
> เป็น Library ของ Javascript ที่เอาไว้พัฒนา Web Application
>
> ### **`Structure`**
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
> `Note : `React ใช้ Syntax JSX คือ Javascript XML ที่จะทำให้เราสามารถเขียน HTML บน Javascript ได้
>
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
