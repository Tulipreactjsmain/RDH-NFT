(this.webpackJsonpRdh=this.webpackJsonpRdh||[]).push([[0],{348:function(e,t,n){},349:function(e,t,n){},396:function(e,t){},398:function(e,t){},403:function(e,t){},404:function(e,t){},431:function(e,t){},433:function(e,t){},443:function(e,t){},445:function(e,t){},455:function(e,t){},457:function(e,t){},472:function(e,t){},573:function(e,t){},575:function(e,t){},580:function(e,t){},582:function(e,t){},589:function(e,t){},601:function(e,t){},604:function(e,t){},609:function(e,t){},695:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"burnBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256[]","name":"_burnIds","type":"uint256[]"},{"internalType":"uint256[]","name":"_burnAmounts","type":"uint256[]"},{"internalType":"uint256[]","name":"_mintIds","type":"uint256[]"},{"internalType":"uint256[]","name":"_mintAmounts","type":"uint256[]"}],"name":"burnForMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_uri","type":"string"}],"name":"setURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')},699:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),r=n(97),s=n.n(r),o=n(69),c=n(70),d=n(4),p=n.n(d),u=n(306),l=n(287),b=n(288),m=n(289),x=(n(348),n(349),n(291)),h=n.n(x),f=(n(350),n.p+"static/media/img1.e2feac64.png"),y=n.p+"static/media/img2.a90f12ce.png",g=n.p+"static/media/founder1.1ad681fc.png",j=n.p+"static/media/founder2.0ef38e3e.png",w=n.p+"static/media/founder3.f85e069c.png",O=n.p+"static/media/founder4.50321e61.png",T=n.p+"static/media/founder3small.648dc5b3.png",v=n.p+"static/media/show1.07300d9d.png",k=n.p+"static/media/show2.b59c2bc3.png",R=n.p+"static/media/show3.5ecbdc15.png",_=n.p+"static/media/show4.125a41f4.png",A=n.p+"static/media/show5.b3d9b422.png",S=n.p+"static/media/show6.b0fff502.png",N=n.p+"static/media/show7.69ba5941.png",M=n.p+"static/media/show8.52665b7e.png",C=n.p+"static/media/show9.9e5945c7.png",I=n.p+"static/media/show10.1146c53b.png",F=n.p+"static/media/show11.5b3b2b76.png",B=n.p+"static/media/show12.732eca9d.png",W=n.p+"static/media/show13.2ed368ad.png",z=n.p+"static/media/show14.c1515ce6.png",D=n.p+"static/media/show15.ebd807c2.png",L=n(292),H=(n(361),n.p+"static/media/icon.4a956db0.png");n(178).config();var K=n(364),U=function(){var e=Object(o.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.pinata.cloud/pinning/pinJSONToIPFS",e.abrupt("return",K.post("https://api.pinata.cloud/pinning/pinJSONToIPFS",t,{headers:{pinata_api_key:"99fb6f6368d7294db69b",pinata_secret_api_key:"564dfef4d3fd4e7164ee33efa252403e4aa230a27b396efa033162ad5380e603"}}).then((function(e){return{success:!0,pinataUrl:"https://gateway.pinata.cloud/ipfs/"+e.data.IpfsHash}})).catch((function(e){return console.log(e),{success:!1,message:e.message}})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(171),q=n(10);n(178).config();var P=(0,n(700).createAlchemyWeb3)("https://eth-goerli.g.alchemy.com/v2/RTIYFD3b3N2PCZ1UzLs6RRLc2VNkT3DP"),J=n(695),X="0x80a25Fa838BD3123ACcFaf1A6Fbe2c99D963f697",Z=new P.eth.Contract(J,X);var V=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(c.a)(r,2),d=s[0],x=s[1],K=Object(a.useState)(!1),P=Object(c.a)(K,2),J=P[0],V=P[1],Y=Object(a.useState)(""),G=Object(c.a)(Y,2),Q=G[0],$=G[1],ee=Object(a.useState)(""),te=Object(c.a)(ee,2),ne=(te[0],te[1]),ae=Object(a.useState)(!1),ie=Object(c.a)(ae,2),re=ie[0],se=ie[1];Object(a.useEffect)((function(){h.a.init({duration:1500})}),[]),Object(a.useEffect)((function(){var e=new Date("Aug 31, 2022 15:37:25").getTime(),t=setInterval((function(){var n=(new Date).getTime(),a=e-n,i=Math.floor(a/864e5),r=Math.floor(a%864e5/36e5),s=Math.floor(a%36e5/6e4),o=Math.floor(a%6e4/1e3);1===i?i+="day : ":0===i?i="":i+="days : ","0"===r?r="":r+="hrs : ",document.getElementById("launchTime").innerHTML=i+r+s+"mins : "+o+"sec",a<0&&(clearInterval(t),document.getElementById("launchTime").innerHTML="")}),1e3)}),[]),Object(a.useEffect)(Object(o.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_accounts"});case 2:(t=e.sent).length>0?(x(t[0]),i(!0)):i(!1),window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(x(e[0]),i(!0)):(x(e[0]),i(!1),alert("install metamask extension!!"))})):alert("install metamask extension!!");case 5:case"end":return e.stop()}}),e)}))),[]);var oe=function(){window.ethereum?window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){return ce(e[0])})):alert("install metamask extension!!")},ce=function(e){x(e),i(!0)},de=function(){var e=Object(o.a)(p.a.mark((function e(t){var n,a,i,r,s,o,c,d,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),(n=new Object).image=t,e.next=5,U(n);case 5:if((a=e.sent).success){e.next=9;break}return V(!1),e.abrupt("return",{success:!1,status:"\ud83d\ude22 Something went wrong while uploading your tokenURI."});case 9:return i=a.pinataUrl,r=Date.now().toString(),s=E.a.utils.parseUnits("30",18),o=E.a.utils.parseUnits(r,18),c={to:X,from:window.ethereum.selectedAddress,data:Z.methods.mint(window.ethereum.selectedAddress,o,s).encodeABI()},d={to:X,from:window.ethereum.selectedAddress,data:Z.methods.setURI(o,i).encodeABI()},e.prev=15,e.next=18,window.ethereum.request({method:"eth_sendTransaction",params:[c]});case 18:return u=e.sent,e.next=21,window.ethereum.request({method:"eth_sendTransaction",params:[d]});case 21:return e.sent,e.abrupt("return",{success:!0,status:u,status2:u});case 25:return e.prev=25,e.t0=e.catch(15),e.abrupt("return",{success:!1,status:"\ud83d\ude25 Something went wrong: "+e.t0.message});case 28:case"end":return e.stop()}}),e,null,[[15,25]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(o.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de("https://gateway.pinata.cloud/ipfs/bafybeifxvxx3uegxmddht6s54jlxnp5rnxqbt4szp3r2e6tetpjxcfkici");case 2:ue(e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function ue(e){return le.apply(this,arguments)}function le(){return(le=Object(o.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:V(!1),t.success?($(t.status2),ne(t.status2),se(!0)):(alert(t.status),se(!1));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=[v,k,R,_,A,S,N,M,C,I,F,B,W,z,D];return Object(q.jsx)(u.a,{children:Object(q.jsxs)(l.a,{minHeight:"100vh",w:"100%",direction:"column",bg:"linear-gradient(290deg, rgb(20,20,50), rgb(40,40,120))",color:"#fff",fontFamily:"chalk",px:["4%","6%"],pt:["4%","2.8%"],pb:["8%","2.8%"],children:[Object(q.jsxs)(l.a,{px:["4","12"],w:"100%",bg:"rgba(255,255,255,0.07)",align:"center",position:"sticky",top:"0",borderRadius:"8px",mb:"6",zIndex:"1","data-aos":"fade-up",backdropFilter:"blur(4px)",py:"3",children:[Object(q.jsxs)(l.a,{align:"center",children:[Object(q.jsx)(b.a,{src:H,w:["40px","50px"],h:["40px","50px"]}),Object(q.jsx)(l.b,{fontWeight:"bold",ml:"3",display:["none","block"],textShadow:"6px 2px rgb(70,70,70)",fontSize:["20px","28px"],children:"RDH Academy"})]}),Object(q.jsxs)(l.a,{flex:"1",align:"center",justify:"flex-end",children:[n?Object(q.jsxs)(q.Fragment,{children:[(null===d||void 0===d?void 0:d.substring(0,4))+".."+(null===d||void 0===d?void 0:d.substring((null===d||void 0===d?void 0:d.length)-4,null===d||void 0===d?void 0:d.length)),Object(q.jsx)(l.a,{ml:"3",mr:["3","7"],cursor:"pointer",fontWeight:"bold",border:"1px solid #fff",py:"3",borderRadius:"8px",px:"7",bg:"rgba(255,255,255,0.2)",_hover:{bg:"rgba(255,255,255,0.4)"},display:["none","flex"],onClick:pe,children:J?Object(q.jsx)(m.a,{color:"#fff",emptyColor:"lightgrey"}):"Mint Now"})]}):Object(q.jsx)(l.a,{mr:["3","7"],cursor:"pointer",fontWeight:"bold",border:"1px solid #fff",py:"3",borderRadius:"8px",px:"7",bg:"rgba(255,255,255,0.2)",_hover:{bg:"rgba(255,255,255,0.4)"},display:"none",onClick:oe,children:"Connect Wallet"}),Object(q.jsx)(l.a,{mr:["3","7"],cursor:"pointer",fontWeight:"bold",border:"1px solid #fff",py:"3",borderRadius:"8px",px:"7",bg:"rgba(255,255,255,0.2)",_hover:{bg:"rgba(255,255,255,0.4)"},display:["none","flex"],onClick:function(){document.getElementById("rdMap").scrollIntoView({behavior:"smooth"})},children:"Roadmap"}),Object(q.jsx)(l.a,{fontSize:["18px","20px"],h:["40px","45px"],w:["40px","45px"],align:"center",justify:"center",borderRadius:"100%",bg:"rgba(255,255,255,0.9)",transition:"300ms ease-in-out",_hover:{bg:"rgba(255,255,255,0.7)"},cursor:"pointer",mr:["3","5"],onClick:function(){return window.open("https://twitter.com/RDHNFTs","_BLANK")},color:"#1DA1F2",children:Object(q.jsx)("i",{className:"mdi mdi-twitter"})}),Object(q.jsx)(l.a,{fontSize:["18px","20px"],h:["40px","45px"],w:["40px","45px"],align:"center",justify:"center",borderRadius:"100%",bg:"rgba(255,255,255,0.9)",transition:"300ms ease-in-out",_hover:{bg:"rgba(255,255,255,0.7)"},cursor:"pointer",color:"#cd486b",mr:["3","5"],onClick:function(){return window.open("https://www.instagram.com/rdhnfts/","_BLANK")},children:Object(q.jsx)("i",{className:"mdi mdi-instagram"})}),Object(q.jsx)(l.a,{fontSize:["18px","20px"],h:["40px","45px"],w:["40px","45px"],align:"center",justify:"center",borderRadius:"100%",bg:"rgba(255,255,255,0.9)",transition:"300ms ease-in-out",_hover:{bg:"rgba(255,255,255,0.7)"},cursor:"pointer",color:"#7289da",onClick:function(){return window.open("https://discord.gg/rdhnft","_BLANK")},children:Object(q.jsx)("i",{className:"mdi mdi-discord"})})]})]}),Object(q.jsxs)(l.a,{direction:"column",py:"4","data-aos":"fade-down",px:"5",children:[Object(q.jsx)(l.b,{w:"100%",fontSize:["20px","40px"],fontWeight:"bold",textAlign:"center",mb:"2",mt:"5",children:"Minting In \ud83d\ude80"}),Object(q.jsx)(l.b,{w:"100%",fontSize:["30px","50px"],fontWeight:"bold",id:"launchTime",textAlign:"center"})]}),Object(q.jsxs)(l.a,{w:"100%",justify:"space-between",mt:["6","12"],mb:"6",align:"center",overflowX:"hidden",className:"bgStars",direction:["column","row"],children:[n?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(l.b,{display:["block","none"],children:(null===d||void 0===d?void 0:d.substring(0,4))+".."+(null===d||void 0===d?void 0:d.substring((null===d||void 0===d?void 0:d.length)-4,null===d||void 0===d?void 0:d.length))}),Object(q.jsx)(l.a,{ml:"3",mb:"6",cursor:"pointer",fontWeight:"bold",border:"1px solid #fff",py:"3",borderRadius:"8px",px:"7",bg:"rgba(255,255,255,0.2)",_hover:{bg:"rgba(255,255,255,0.4)"},display:["flex","none"],onClick:pe,children:"Mint Now"})]}):Object(q.jsx)(l.a,{mb:"6",cursor:"pointer",fontWeight:"bold",border:"1px solid #fff",py:"3",borderRadius:"8px",px:"7",bg:"rgba(255,255,255,0.2)",_hover:{bg:"rgba(255,255,255,0.4)"},display:"none",onClick:oe,children:"Connect Wallet"}),Object(q.jsxs)(l.a,{w:"100%",display:["flex","none"],mb:"6",justify:"space-between",align:"center","data-aos":"fade-left",className:"bgStars2",children:[Object(q.jsx)(b.a,{w:"50%",src:f,borderRadius:"8px",className:"mshake"}),Object(q.jsx)(b.a,{w:"45%",src:y,borderRadius:"8px",className:"mshake2"})]}),Object(q.jsxs)(l.a,{w:["100%","45%"],direction:"column",children:[re&&Object(q.jsxs)(l.b,{"data-aos":"fade-up",mb:"5",mt:"2",border:"1px solid #019401",py:"3",borderRadius:"8px",px:"7",bg:"rgba(14, 232, 14, .2)",children:["Minted!! Check out your transaction on ",Object(q.jsxs)(l.b,{textDecoration:"underline",fontWeight:"bold",cursor:"pointer",onClick:function(){return window.open("https://goerli.etherscan.io/tx/"+Q,"_BLANK")},children:["https://goerli.etherscan.io/tx/",Q]})]}),Object(q.jsxs)(l.a,{w:"100%",direction:"column","data-aos":"fade-right",borderRadius:"8px",py:"6",mb:"6",children:[Object(q.jsx)(l.b,{fontWeight:"bold",fontSize:"30px",mb:"4",textShadow:"6px 2px rgb(70,70,70)",children:"WHAT IS RDH? "}),Object(q.jsxs)(l.b,{fontSize:["16px","17px"],children:[Object(q.jsx)(l.a,{mb:"3",fontSize:"25px",h:"45px",w:"45px",align:"center",justify:"center",borderRadius:"100%",bg:"rgb(80,80,130)",transition:"300ms ease-in-out",_hover:{bg:"rgb(100,100,150)"},"data-aos":"fade-up",color:"rgb(255, 0, 98)",children:Object(q.jsx)("i",{className:"mdi mdi-human-greeting"})}),Object(q.jsx)(l.b,{color:"rgb(200,200,250)",mb:"1",id:"rdMap",children:"Rekted diamond hands (RDH)"}),"Is a collection for the community and by the community, 5555 ERC-721 tokens randomly generated on the ethereum blockchain. We aim to be a source of light for rekt hodlers in the dark tunnel of the bear season, FOMO in to get your rekted bags pumped."]})]}),Object(q.jsx)(l.a,{w:"100%",direction:"column","data-aos":"fade-right",bg:"rgba(255,255,255,0.05)",borderRadius:"8px",px:["6","8"],py:"6",children:Object(q.jsxs)(l.b,{fontSize:["16px","17px"],children:[Object(q.jsx)(l.a,{mb:"3",fontSize:"20px",h:"45px",w:"45px",align:"center",justify:"center",borderRadius:"100%",bg:"rgb(80,80,130)",transition:"300ms ease-in-out",_hover:{bg:"rgb(100,100,150)"},"data-aos":"fade-up",color:"rgb(255, 213, 0)",children:Object(q.jsx)("i",{className:"mdi mdi-car-wash"})}),Object(q.jsx)(l.b,{color:"rgb(200,200,250)",mb:"1",children:"Roadmap"}),"Only roadmap we have is to keep building based on hodlers interaction and incorporate feedback from our community."]})})]}),Object(q.jsxs)(l.a,{w:"55%",display:["none","flex"],justify:"space-between",align:"center","data-aos":"fade-left",pb:"15%",pl:"5%",children:[Object(q.jsx)(b.a,{w:"50%",src:f,borderRadius:"10px",className:"shake"}),Object(q.jsx)(b.a,{w:"45%",src:y,borderRadius:"10px",className:"shake2"})]})]}),Object(q.jsxs)(l.a,{mt:["6","12"],mb:"6",bg:"rgba(255,255,255,0.03)",w:["100vw","100%"],py:["6","12"],borderRadius:["0px","8px"],"data-aos":"fade-up",className:"absW",px:["5%","15%"],direction:"column",align:"center",children:[Object(q.jsxs)(l.a,{w:"100%",direction:"column",display:["none","flex"],align:"flex-start",children:[Object(q.jsx)(l.b,{mb:"2",fontSize:["20px","25px"],fontWeight:"bold","data-aos":"fade-right",children:"RDH Sneak Peeks"}),Object(q.jsxs)(l.b,{mb:"12",textAlign:"left",px:["2","0%"],pr:["0","20%"],"data-aos":"fade-left",children:["All items in this collection will represent the experience a holder encountered in his/her Cypto/NFT journey.",Object(q.jsx)("br",{}),"Represent your journey!"]})]}),Object(q.jsx)(l.a,{align:"center",w:"100%",justify:"center",children:Object(q.jsx)(L.Carousel,{autoPlay:!0,infiniteLoop:!0,showStatus:!1,showIndicators:!0,swipeable:!0,showArrows:!0,showThumbs:!1,stopOnHover:!1,interval:4e3,children:be.map((function(e,t){return Object(q.jsx)(l.a,{w:"100%",px:["1%","25%"],align:"center",direction:"column",children:Object(q.jsx)(b.a,{src:e,borderRadius:"8px",className:"carImg shake"},t)},t)}))})}),Object(q.jsxs)(l.a,{w:"100%",direction:"column",display:["flex","none"],align:"center",overflowX:"hidden",children:[Object(q.jsx)(l.b,{mt:"12",mb:"2",fontSize:["20px","25px"],fontWeight:"bold","data-aos":"fade-right",children:"RDH Sneak Peeks"}),Object(q.jsxs)(l.b,{textAlign:"center",px:["2","20%"],"data-aos":"fade-left",children:["All items in this collection will represent the experience a holder encountered in his/her Cypto/NFT journey.",Object(q.jsx)("br",{}),"Represent your journey!"]})]})]}),Object(q.jsx)(l.a,{justify:"center",mt:["6","12"],backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"8px",py:"12",className:"bgStars",children:Object(q.jsxs)(l.a,{w:"100%",direction:"column",align:"center",children:[Object(q.jsx)(l.b,{fontWeight:"bold",fontSize:["24px","30px"],children:"The RDH Founders"}),Object(q.jsxs)(l.a,{w:"100%",align:"center",justify:"center",px:"10%",direction:["column","row"],children:[Object(q.jsxs)(l.a,{direction:"column",align:"center",w:["100%","50%"],mb:["5","0"],children:[Object(q.jsx)(b.a,{w:["170px","200px"],h:["170px","200px"],borderRadius:"100%",src:g,mt:"6","data-aos":"fade-up"}),Object(q.jsxs)(l.b,{textAlign:"center",px:["2%","10%"],mt:"6","data-aos":"fade-up",children:[Object(q.jsx)(l.b,{color:"rgb(200,200,250)",cursor:"pointer",mb:"2",onClick:function(){return window.open("https://twitter.com/solsmahneth?s=21&t=_O59LWK2c3h6KY31ZgkOxw","_BLANK")},children:"@Solsmahn.eth"}),"Also known as Tulipman in the community, Solsmahn is a UAE based Blockchain developer and NFT consultant"]})]}),Object(q.jsxs)(l.a,{direction:"column",align:"center",w:["100%","50%"],mb:["5","0"],children:[Object(q.jsx)(b.a,{w:["170px","200px"],h:["170px","200px"],borderRadius:"100%",src:j,mt:"6","data-aos":"fade-up"}),Object(q.jsxs)(l.b,{textAlign:"center",px:["2%","10%"],mt:"6","data-aos":"fade-up",children:[Object(q.jsx)(l.b,{color:"rgb(200,200,250)",cursor:"pointer",mb:"2",onClick:function(){return window.open("https://twitter.com/mastrodre","_BLANK")},children:"@Mastrodre"}),"Also known as OG kelvin is a Dubai based web 3 enthusiast and investor."]})]})]}),Object(q.jsxs)(l.a,{align:"center",w:"100%",px:"10%",direction:["column","row"],children:[Object(q.jsxs)(l.a,{w:["100%","50%"],direction:"column",align:"center",mb:["2","0"],children:[Object(q.jsx)(l.b,{fontWeight:"bold",fontSize:["24px","30px"],mt:["12","100px"],mb:"2","data-aos":"fade-up",children:"Advisor"}),Object(q.jsx)(l.a,{w:"100%",align:"center",justify:"center",px:"0%",direction:["column","row"],children:Object(q.jsxs)(l.a,{direction:"column",align:"center",w:["100%","50%"],children:[Object(q.jsx)(b.a,{w:["170px","200px"],h:["170px","200px"],borderRadius:"100%",src:w,mt:"6","data-aos":"fade-up"}),Object(q.jsx)(b.a,{w:"100px",h:"100px",src:T,position:"absolute",borderRadius:"100%",ml:["150px","130px"],mt:"20px",boxShadow:"0px 0px 8px rgb(0,0,0)"}),Object(q.jsx)(l.b,{textAlign:"center",px:["2%","10%"],mt:"6","data-aos":"fade-up",children:Object(q.jsx)(l.b,{color:"rgb(200,200,250)",cursor:"pointer",mb:"2",onClick:function(){return window.open("https://twitter.com/shahh?s=21","_BLANK")},children:"@Shahh"})})]})})]}),Object(q.jsxs)(l.a,{w:["100%","50%"],direction:"column",align:"center",children:[Object(q.jsx)(l.b,{fontWeight:"bold",fontSize:["24px","30px"],mt:["12","100px"],mb:"2","data-aos":"fade-up",children:"Developer"}),Object(q.jsx)(l.a,{w:"100%",align:"center",justify:"center",px:"0%",direction:["column","row"],children:Object(q.jsxs)(l.a,{direction:"column",align:"center",w:["100%","50%"],children:[Object(q.jsx)(b.a,{w:["170px","200px"],h:["170px","200px"],borderRadius:"100%",src:O,mt:"6","data-aos":"fade-up"}),Object(q.jsx)(l.b,{textAlign:"center",px:["2%","10%"],mt:"6","data-aos":"fade-up",children:Object(q.jsx)(l.b,{color:"rgb(200,200,250)",cursor:"pointer",mb:"2",onClick:function(){return window.open("https://twitter.com/thelunalabs?s=11&t=26eD2Z6tX4ktKWIeAkj7kg","_BLANK")},children:"@TheLunaLabs"})})]})})]})]})]})}),Object(q.jsxs)(l.a,{direction:"column",mt:["6","12"],bgColor:"rgba(255,255,255,0.03)",borderRadius:"8px",py:"12",px:["6","0"],children:[Object(q.jsx)(l.b,{textAlign:"center","data-aos":"fade-up",children:"Created by the RDH founders with special love to our community, Our friends, families, and loved ones"}),Object(q.jsxs)(l.b,{textAlign:"center",mt:"3","data-aos":"fade-up",children:["For all press inquiries, please contact ",Object(q.jsx)(l.b,{as:"span",color:"rgb(200,200,250)",mb:"2",cursor:"pointer",onClick:function(){return window.open("mailto: press@rdh.club")},children:"press@rdh.club"})]}),Object(q.jsxs)(l.a,{flex:"1",align:"center",justify:"center",mt:"8","data-aos":"fade-up",children:[Object(q.jsx)(l.a,{fontSize:["18px","20px"],h:["40px","45px"],w:["40px","45px"],align:"center",justify:"center",borderRadius:"100%",bg:"rgba(255,255,255,0.1)",transition:"300ms ease-in-out",_hover:{bg:"rgba(255,255,255,0.3)"},cursor:"pointer",className:"bounce",mr:["3","5"],onClick:function(){return window.open("https://twitter.com/RDHNFTs","_BLANK")},children:Object(q.jsx)("i",{className:"mdi mdi-twitter"})}),Object(q.jsx)(l.a,{fontSize:["18px","20px"],h:["40px","45px"],w:["40px","45px"],align:"center",justify:"center",borderRadius:"100%",bg:"rgba(255,255,255,0.1)",transition:"300ms ease-in-out",_hover:{bg:"rgba(255,255,255,0.3)"},className:"bounce",mr:["3","5"],cursor:"pointer",onClick:function(){return window.open("https://discord.gg/rdhnft","_BLANK")},children:Object(q.jsx)("i",{className:"mdi mdi-discord"})}),Object(q.jsx)(l.a,{fontSize:["18px","20px"],h:["40px","45px"],w:["40px","45px"],align:"center",justify:"center",borderRadius:"100%",bg:"rgba(255,255,255,0.1)",transition:"300ms ease-in-out",_hover:{bg:"rgba(255,255,255,0.3)"},className:"bounce2",onClick:function(){return window.open("https://www.instagram.com/rdhnfts/","_BLANK")},cursor:"pointer",children:Object(q.jsx)("i",{className:"mdi mdi-instagram"})})]})]})]})})};s.a.render(Object(q.jsx)(i.a.StrictMode,{children:Object(q.jsx)(V,{})}),document.getElementById("root"))}},[[699,1,2]]]);
//# sourceMappingURL=main.c9b5d728.chunk.js.map