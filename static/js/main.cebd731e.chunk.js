(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var s=i(7),a=i.n(s),c=(i(15),i(9)),n=i(2),l=i(1),r=(i(16),i(10)),d=(i(17),i(18),i(0)),o=function(e){var t=e.title,i=e.description,s=e.imgUrl,a=e.imdbUrl;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:s,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:t})})]}),Object(d.jsxs)("div",{className:"content",children:[i,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:a,children:"Link to movie"})]})]})]})},m=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(o,Object(r.a)({},e),e.imdbId)}))})},b=i(5),j=i.n(b),h=function(e){var t=e.onAdd,i=Object(l.useState)(""),s=Object(n.a)(i,2),a=s[0],c=s[1],r=Object(l.useState)(""),o=Object(n.a)(r,2),m=o[0],b=o[1],h=Object(l.useState)(""),u=Object(n.a)(h,2),p=u[0],O=u[1],g=Object(l.useState)(""),x=Object(n.a)(g,2),v=x[0],f=x[1],_=Object(l.useState)(""),w=Object(n.a)(_,2),N=w[0],M=w[1],y=Object(l.useState)(!1),k=Object(n.a)(y,2),T=k[0],U=k[1],I=Object(l.useState)(!1),B=Object(n.a)(I,2),S=B[0],z=B[1],A=Object(l.useState)(!1),D=Object(n.a)(A,2),V=D[0],Y=D[1],E=Object(l.useState)(!1),C=Object(n.a)(E,2),F=C[0],Z=C[1],X=Object(l.useState)(!1),L=Object(n.a)(X,2),G=L[0],J=L[1],W=Object(l.useState)(!0),Q=Object(n.a)(W,2),R=Q[0],$=Q[1],q=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,H={title:a,description:m,imgUrl:p,imdbUrl:v,imdbId:N};Object(l.useEffect)((function(){v&&p&&a.length>0&&m&&N?$(!1):$(!0)}),[v,p,a,m,N]);return Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("h1",{className:"sidebar__title title is-4",children:"Add new movie"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!q.test(v)||!q.test(p)||T||S||G||(t(H),c(""),b(""),M(""),O(""),f(""),Z(!1),Y(!1))},className:"sidebar__form",children:[Object(d.jsx)("input",{type:"text",className:"sidebar__input-title input my-3",value:a,placeholder:"Enter the title",onChange:function(e){U(!1),c(e.target.value)}}),Object(d.jsx)("input",{type:"text",className:"sidebar__input-title input my-3",value:m,placeholder:"Enter the description",onChange:function(e){z(!1),b(e.target.value)}}),Object(d.jsx)("input",{type:"text",className:j()("sidebar__input-imgUrl input my-3",{"is-danger":!0===V}),value:p,placeholder:"Enter an basic image link",onChange:function(e){O(e.target.value),function(e){q.test(e.target.value)?Y(!1):Y(!0)}(e)}}),V&&Object(d.jsx)("span",{className:"has-text-danger",children:"Incorrect url"}),Object(d.jsx)("input",{type:"text",className:j()("sidebar__input-imgUrl input my-3",{"is-danger":!0===F}),value:v,placeholder:"Enter an link to IMDb movie",onChange:function(e){f(e.target.value),function(e){q.test(e.target.value)?Z(!1):Z(!0)}(e)}}),F&&Object(d.jsx)("span",{className:"has-text-danger",children:"Incorrect url"}),Object(d.jsx)("input",{type:"text",className:"sidebar__input-title input my-3",value:N,placeholder:"Enter an resurs IMDb id",onChange:function(e){J(!1),M(e.target.value)}}),Object(d.jsx)("div",{className:"sidebar__button-box",children:Object(d.jsx)("button",{className:j()("sidebar__button button is-success",{"is-static":R}),type:"submit",children:"Add movie"})})]}),Object(d.jsxs)("div",{className:"sidebar__text-box mt-6",children:[Object(d.jsxs)("p",{className:"sidebar__test-title",children:["Test title:"," ",Object(d.jsx)("b",{children:"The Batman"})]}),Object(d.jsxs)("p",{className:"sidebar__test-description",children:["Test description:"," ",Object(d.jsx)("b",{children:"When a sadistic serial killer begins murdering key political\n          figures in Gotham, Batman is forced to investigate the city's\n          hidden corruption and question his family's involvement."})]}),Object(d.jsxs)("p",{className:"sidebar__test-imgUrl",children:["Test Film Logo: (",Object(d.jsx)("i",{children:"copy link"}),")"," ",Object(d.jsx)("a",{href:"https://cly.1cdn.vn/2022/03/19/whatsappimage2022-01-26at75550pm-16466344716182124443472.jpeg",className:"is-ghost",children:Object(d.jsx)("b",{children:"copy image link"})})]}),Object(d.jsxs)("p",{className:"sidebar__test-imdbUrl",children:["Test Movie Link: (",Object(d.jsx)("i",{children:"copy link"}),")"," ",Object(d.jsx)("a",{href:"https://www.imdb.com/title/tt1877830/",className:"is-ghost",children:Object(d.jsx)("b",{children:"copy movie link"})})]}),Object(d.jsxs)("p",{className:"sidebar__test-imdbId",children:["Test imdbId:"," ",Object(d.jsx)("b",{children:"tt1877830"})]})]})]})},u=i(8),p=function(){var e=Object(l.useState)(u),t=Object(n.a)(e,2),i=t[0],s=t[1];return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(m,{movies:i})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(h,{onAdd:function(e){s((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};a.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.cebd731e.chunk.js.map