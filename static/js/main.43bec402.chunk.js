(window.webpackJsonpwebchat=window.webpackJsonpwebchat||[]).push([[0],{19:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACSElEQVR42u3bvU7CUBjGcSa8AUETjQK6oZfjFWjZnB3F0UGCUtp78BqEls0d2HR0cZPTEVPPwcToQOTjwMuB/5O8K6HPr31h6MlkCCGEEEIIIYQQQgiZMKVGclpsqvtCoHrFIEmKgUpXc5LEfMdSqOpHoTpxvvjjh3RLX1CgL+5zdUsfO0M9fvkxzTpbfilQbQeL/zP6Bmo5iaDLD10v/2eaquHezndz7YxdR8e+KjsDYH5w16j871UUDmourZ/+ugHo6brzBARKrSHAwCWAdB0HAAAAAAAAAAAAAAAAAAAAAAAAAACAzQHIefGkk2x7cS/nRfWd8+gEgOUD/J5hrhL5mbN+FgAZgNHkvbi1NAQAxk2nAYAoQDzc9dplAOQAzCqqASAIkKvEXQAkAbx4AIAsQAoAAAAAAIBjryb6HwBIzuHdOwCSs1d9AUDufMAg3bl8BkBq9m9erZUPwJRzcPuW5isdACTWjrnzbZcPwD9/Nc2/HfODa3PnrzRAIVTX/33eooqQmpUBmKR8ABYEMGn5ACwAYJryAbAMMG35AFgEmKV8ACwBzFo+ABYA5ikfgDkB5i0fgDkAbJQPwIwAtsoHYIaUmqpq8/MAEI55mQkAwej3KfsAiD4BUR0AwZhjPqOTJgAIPgX6mA8AktHHe7YvOk8ACCOYYz6ur6OM6zHHfMxJE3PYQV+QAmDDo5/KKwAcQqAtYQSaEkagJWEEGhJGoB1hBJoRRqAVYQQaEUagDWEEmhBMvhJVaYEQQgghhBBCCCGEjMsXJDSgH3+NDlEAAAAASUVORK5CYII="},21:function(e,t,n){e.exports=n(36)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(12),o=n.n(c),r=n(8),i=(n(31),n(2)),m=n(3),l=n(5),u=n(4),g=n(6),d=function(e){var t=e.messageItem,n=e.name,a=t.message,c=t.from,o=t.time,r=new Date(t.time),i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r.getDay()],m=r.getUTCHours()+3;m>=24&&(m="0"+(m-24));var l=r.getUTCMinutes();return l<10&&(l="0"+l),o?s.a.createElement(function(){return s.a.createElement("div",{className:"message"},s.a.createElement("span",{className:c===n?"message-author":"message-username"}," ",c),s.a.createElement("span",{className:"message-time"},"(",i," ",m,":",l,"): "),s.a.createElement("span",{className:"message-text"},a))},null):s.a.createElement(function(){return s.a.createElement("div",{className:"message no-send"},s.a.createElement("span",{className:c===n?"message-author":"message-username"}," ",c),s.a.createElement("span",null,"(",s.a.createElement("b",null,"not send yet"),"): "),s.a.createElement("span",{className:"message-text"},a))},null)},A=(n(32),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){var e=document.querySelector(".messages-container");e.scrollTo(0,e.scrollHeight)}},{key:"render",value:function(){var e=this,t=this.props.messages;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"messages-container scroll-style"},t.concat(this.props.localMessages).map(function(t,n){return s.a.createElement(d,{key:t.id+n,messageItem:t,name:e.props.name})})))}}]),t}(a.Component)),p=Object(r.b)(function(e){var t=e.messages,n=t.messages,a=t.message,s=t.connected;return{messages:n,localMessages:t.localMessages,name:t.name,message:a,connected:s}},null)(A),E="SOCKET_CONNECT_ACTION",f="CONNECTION_ACTION",h="SOCKET_DISCONNECT_ACTION",b="DISCONNECTION_ACTION",O="MESSAGE_SENDING",S="SOCKET_MESSAGE_SEND",N="MESSAGE_RECEIVED",C="MESSAGE_SENDING_SUCCESS",v="SOCKET_SEND_MESSAGES_AFTER_CONNECT",y="RECONNECTION_ACTION",j="SETNAME_ACTION",T="SETNAME_FROMLOCALSTORAGE_ACTION";function k(){return{type:E}}function M(){return{type:b}}function D(e){return{type:C,id:e}}var w=n(1),I=(n(33),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={name:""},e.onSubmit=e.onSubmit.bind(Object(w.a)(e)),e.onChange=e.onChange.bind(Object(w.a)(e)),e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.setName(this.state.name),localStorage.setItem("name",this.state.name),this.setState({name:""})}},{key:"onChange",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"chat-nickname"},s.a.createElement("span",null,"Welcome to chat, ",s.a.createElement("strong",null,this.props.authorName),"!")),s.a.createElement("div",{className:"change-name"},s.a.createElement("span",null,"Change name: "),s.a.createElement("div",null,s.a.createElement("input",{className:"effect-1",type:"text",value:this.state.name,placeholder:"Print name...",maxLength:"10",onChange:this.onChange}),s.a.createElement("span",{className:"focus-border"})),s.a.createElement("button",{onClick:this.onSubmit,className:"button"},"set")))}}]),t}(a.Component)),_=(n(34),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.connectAction(),localStorage.getItem("name")?this.props.setNameFromLocalStorageAction(localStorage.getItem("name")):this.props.setNameFromLocalStorageAction("anonymous")}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.connected,a=e.name,c="chat-status";return"connected"===t&&(c+=" connected"),"disconnected"===t&&(c+=" disconnected"),"reconnection"===t&&(c+=" reconnection"),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"header-top"},s.a.createElement("h1",null,"Public chat"),s.a.createElement("div",{className:"header-buttons"},s.a.createElement("button",{onClick:this.props.disconnectAction,disabled:n?"":"disabled",className:"button"},"disconnect"),s.a.createElement("button",{onClick:this.props.connectAction,disabled:n?"disabled":"",className:"button"},"connect"))),s.a.createElement("div",{className:c},s.a.createElement("div",{className:"header-bottom"},s.a.createElement(I,{authorName:a,setName:this.props.setNameAction})),s.a.createElement("div",{className:"connection-status"},s.a.createElement("div",{className:"reconnection"===t?"connection-status-message pulse":"connection-status-message"},s.a.createElement("span",null,t)))))}}]),t}(a.Component)),U=Object(r.b)(function(e){var t=e.messages;return{loaded:t.loaded,message:t.message,connected:t.connected,name:t.name}},function(e){return{connectAction:function(){return e(k())},disconnectAction:function(){return e({type:h})},setNameAction:function(t){return e(function(e){return{type:j,name:e}}(t))},setNameFromLocalStorageAction:function(t){return e(function(e){return{type:T,name:e}}(t))}}})(_),P=(n(35),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={text:""},e.onSubmit=e.onSubmit.bind(Object(w.a)(e)),e.onChange=e.onChange.bind(Object(w.a)(e)),e.onKeyUp=e.onKeyUp.bind(Object(w.a)(e)),e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.messageSending(this.state.text,this.props.name),this.setState({text:""})}},{key:"onChange",value:function(e){this.setState({text:e.target.value})}},{key:"onKeyUp",value:function(e){13===e.keyCode&&(e.preventDefault(),this.props.messageSending(this.state.text,this.props.name),this.setState({text:""}))}},{key:"render",value:function(){return s.a.createElement("form",{className:"chat-form",onSubmit:this.onSubmit},s.a.createElement("textarea",{className:"chat-textarea scroll-style",value:this.state.text,onChange:this.onChange,autoComplete:"off",onKeyUp:this.onKeyUp}),s.a.createElement("div",{className:"chat-buttons"},s.a.createElement("button",{type:"submit",value:"Send",className:"chat-button chat-button--submit",onClick:this.onSubmit},"Send")))}}]),t}(a.Component)),K=Object(r.b)(function(e){return{name:e.messages.name}},function(e){return{messageSending:function(t,n){e(function(e,t,n){return{type:O,text:e,name:t,status:n}}(t,n)),e({type:S})}}})(P),x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){Notification.requestPermission()}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"chat-container"},s.a.createElement("div",{className:"chat-header"},s.a.createElement(U,null)),s.a.createElement(p,null),s.a.createElement("div",{className:"chat-actions"},s.a.createElement(K,null))))}}]),t}(a.Component),B=n(9),Q=n(18),H=n(19),G=n.n(H),R=function(){var e=null;function t(t){return new Promise(function(s,c){e=new WebSocket("wss://wssproxy.herokuapp.com/"),t.dispatch({type:f}),e.onopen=function(){s(e)},e.onmessage=a(e,t),e.onclose=n(e,t),e.onerror=function(e){t.dispatch(M()),c(e)}})}var n=function(t,n){return function(){e=null,n.dispatch(M()),function e(t){t||(n.dispatch({type:y}),setTimeout(function(){n.getState().messages.connected||n.dispatch(k())},5e3),setTimeout(function(){n.getState().messages.connected||e(n.getState().messages.connected)},5500))}(n.getState().messages.connected)}},a=function(e,t){return function(e){var n=JSON.parse(e.data);t.dispatch(function(e){return{type:N,msg:e}}(n)),"granted"===Notification.permission&&"hidden"===document.visibilityState&&n.forEach(function(e){!function(e,t,n){var a=new Notification(n,{body:e,icon:t});setTimeout(a.close.bind(a),3e3)}(e.from+": "+e.message,G.a,"New message on Public chat")})}};return function(n){return function(a){return function(s){switch(s.type){case"SOCKET_CONNECT_ACTION":null!=e&&e.close(),e=null,t(n).then(function(){n.dispatch({type:v})});break;case"SOCKET_DISCONNECT_ACTION":null!=e&&e.close(),e=null;break;case"SOCKET_MESSAGE_SEND":var c=n.getState().messages.localMessages,o=c[c.length-1];null!=e&&(e.send(JSON.stringify({from:o.from,message:o.message})),n.dispatch(D(o.id)));break;case"SOCKET_SEND_MESSAGES_AFTER_CONNECT":n.getState().messages.localMessages.length>0&&function t(n,a){var s=a[0],c=a.length;null!=e&&(e.send(JSON.stringify({from:s.from,message:s.message})),n.dispatch(D(s.id)),c>1&&t(n,n.getState().messages.localMessages))}(n,n.getState().messages.localMessages);break;default:return a(s)}}}}}(),J=n(11),Y=n(20);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach(function(t){Object(Y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var q={messages:[],localMessages:[],message:"Just created",connected:!1,name:""};var L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,V=[Q.a,R],W=L(B.a.apply(void 0,V)),Z=Object(B.c)({messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return F({},e,{message:"connected",connected:!0});case y:return F({},e,{message:"reconnection",connected:!1});case j:return F({},e,{name:t.name,messages:Object(J.a)(e.messages.slice())});case T:return F({},e,{name:t.name});case b:return F({},e,{message:"disconnected",connected:!1});case N:var n=[];return t.msg.forEach(function(e){n.unshift(e)}),n=e.messages.concat(n),F({},e,{messages:Object(J.a)(n)});case O:var a={id:(new Date).getTime()+1e4*Math.random(),from:t.name,message:t.text,time:0};return F({},e,{localMessages:[].concat(Object(J.a)(e.localMessages),[a]),messages:Object(J.a)(e.messages)});case C:var s=e.localMessages.find(function(e){return e.id===t.id});return e.localMessages.splice(e.localMessages.indexOf(s),1),F({},e,{localMessages:Object(J.a)(e.localMessages)});default:return e}}}),X=Object(B.e)(Z,W);o.a.render(s.a.createElement(r.a,{store:X},s.a.createElement(x,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.43bec402.chunk.js.map