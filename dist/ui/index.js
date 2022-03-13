import{j as v,s as r,r as g,a as R,u as B,W as T,Q as W,R as F,b as z,c as S,F as N,l as X,y as q}from"./vendor.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function c(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=c(i);fetch(i.href,s)}};J();const e=v.exports.jsx,o=v.exports.jsxs,p=v.exports.Fragment,_=()=>o($,{children:[e(ne,{children:"Sign up to unlock key features"}),o(oe,{children:[e(y,{children:"Personal Dashboard"}),e(y,{children:"Save and access your documents"}),e(y,{children:"Get weekly writing statistics and tips"})]}),e(re,{href:"https://app.writesonic.com/login",target:"_blank",children:"Sign in"}),o(ee,{children:[e("span",{children:"Don't have an account?"})," ",e(te,{href:"https://app.writesonic.com/signup",target:"_blank",children:"Sign up"})]})]}),$=r.div`
  padding: 16px 32px 24px;
  display: flex;
  flex-direction: column;
`,ee=r.div`
  color: #6b7280;
  font-size: 12px;
`,te=r.a`
  color: #544be6;
  text-decoration: none;
`,ne=r.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: #111827;
  margin-bottom: 8px;
`,oe=r.ul`
  list-style: none;
`,y=r.li`
  color: #6b7280;
  font-family: Inter;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0;
  height: 20px;
  &::before {
    content: '•';
    color: #8dc546;
    font-size: 30px;
    width: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -4px;
  }
`,re=r.a`
  margin: 24px 0 15px;
  height: 40px;
  font-size: 14px;
  background-color: #ec4899;
  color: white;
  border: none;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  display: grid;
  place-items: center;
  text-decoration: none;
  &:hover {
    background-color: #c53d80;
  }
`,ie=()=>o(se,{children:[e(ce,{src:chrome.runtime.getURL("assets/img/logo.png")}),e(ae,{children:"for Chrome"})]}),se=r.nav`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 32px;
  border-bottom: 1px solid rgba(107, 114, 128, 0.1);
`,ce=r.img`
  height: 23px;
  margin-top: -0.5px;
`,ae=r.span`
  color: #4f46e5;
  font-family: Inter;
  font-size: 12px;
  font-weight: 800;
  padding: 0 4px;
`,u=r.div`
  border-bottom: 1px solid rgba(107, 114, 128, 0.08);
  height: 1px;
  width: 100%;
`,le=({activeSites:n,setActivePage:t})=>{const[c,a]=g.exports.useState(""),[i,s]=g.exports.useState(!1);g.exports.useEffect(()=>{n&&(chrome==null||chrome.tabs.query({active:!0,lastFocusedWindow:!0},l=>{const h=new URL(l[0].url);a(h.hostname),n.some(x=>x===h.hostname)&&s(!0)}))},[n]);function d(l){l&&(chrome.storage.local.set({activeSites:[...n,c]}),s(!0)),l||(chrome.storage.local.set({activeSites:n.filter(h=>h!==c)}),s(!1))}return o(de,{children:[e(he,{children:"Quick settings"}),o(ge,{children:[o("span",{children:["Enable on ",e("strong",{children:c})]}),o("label",{className:"form-switch",children:[e("input",{type:"checkbox",checked:i,onChange:l=>d(l.target.checked)}),e("i",{})]})]}),e(u,{}),o(pe,{onClick:()=>chrome.tabs.create({url:"https://app.writesonic.com/settings/billing"}),children:["\u2764\uFE0F ",e("strong",{children:"Upgrade now"})," to unlock unlimited generations!"]}),e(xe,{})]})},de=r.div`
  padding: 0 32px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
`,ge=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  color: #6b7280;
  font-size: 13px;
`,he=r.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: #111827;
  margin-bottom: 24px;
`,pe=r.a`
  background: rgba(236, 72, 153, 0.07);
  border-radius: 6px;
  color: rgba(236, 72, 153, 0.8);
  padding: 6px 12px;
  height: 32px;
  font-weight: 500;
  font-size: 11px;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`,xe=r.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-top: 12px;
  margin-bottom: 16px;
`;r.button`
  background: rgba(79, 70, 229, 0.08);
  border-radius: 6px;
  font-weight: 500;
  font-size: 12px;
  color: #4f46e5;
  text-align: center;
  width: 50%;
  border: none;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
`;const ue=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M8.30615 1.10687C8.2174 1.03762 8.10805 1 7.99547 1C7.8829 1 7.77355 1.03762 7.6848 1.10687L0.5 6.70967L1.12135 7.49552L2 6.81042V13C2.00054 13.265 2.10607 13.5191 2.29349 13.7065C2.48091 13.8939 2.73495 13.9994 3 14H13C13.2651 13.9995 13.5191 13.894 13.7066 13.7065C13.894 13.5191 13.9995 13.265 14 13V6.81497L14.8786 7.49997L15.5 6.71407L8.30615 1.10687ZM9 13H7V8.99997H9V13ZM10 13V8.99997C9.9997 8.73485 9.89424 8.48067 9.70677 8.2932C9.5193 8.10573 9.26512 8.00028 9 7.99997H7C6.73486 8.00024 6.48066 8.10568 6.29319 8.29316C6.10571 8.48064 6.00026 8.73484 6 8.99997V13H3V6.03072L8 2.13572L13 6.03597V13H10Z",fill:"#4F46E5"})}),fe=()=>o("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M13 13H9V14H13V13Z",fill:"#4F46E5"}),e("path",{d:"M15 11H9V12H15V11Z",fill:"#4F46E5"}),e("path",{d:"M15 9H9V10H15V9Z",fill:"#4F46E5"}),e("path",{d:"M10.2746 5.6085L8.00014 1L5.72564 5.6085L0.640137 6.3475L4.32014 9.935L3.45114 15L7.00014 13.1345V12.0045L4.77964 13.172L5.30564 10.104L5.39464 9.5855L5.01814 9.219L2.78914 7.0455L5.86964 6.598L6.38964 6.5225L6.62264 6.051L8.00014 3.2595L9.37764 6.051L9.61064 6.5225L10.1306 6.598L13.8576 7.1405L14.0001 6.15L10.2746 5.6085Z",fill:"#4F46E5"})]}),we=()=>o(p,{children:[e(u,{}),o(Ce,{children:[o(V,{onClick:()=>chrome.tabs.create({url:"https://app.writesonic.com"}),children:[e(ue,{}),"Home"]}),o(V,{onClick:()=>chrome.tabs.create({url:"https://forms.reform.app/writesonic/chrome-feedback/tpfwc3"}),children:[e(fe,{}),"Give Feedback"]})]})]}),Ce=r.footer`
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,V=r.div`
  color: #4f46e5;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
`,Ae=()=>o("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e("path",{d:"M0 24.68H24V0.68H0V24.68Z",fill:"url(#pattern0)"}),o("defs",{children:[e("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:e("use",{xlinkHref:"#image0_1443_4018",transform:"scale(0.015625)"})}),e("image",{id:"image0_1443_4018",width:"64",height:"64",xlinkHref:"data:image/png;base64,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"})]})]}),me=()=>o("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e("path",{d:"M0 24.68H24V0.68H0V24.68Z",fill:"url(#pattern0)"}),o("defs",{children:[e("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:e("use",{xlinkHref:"#image0_1443_4016",transform:"scale(0.015625)"})}),e("image",{id:"image0_1443_4016",width:"64",height:"64",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAWP0lEQVR4AeWbBXAcx/b1f90Di1pJlmTJDDE7nMfMzMzM+GdmZmZmZgo8Zub3ArYTQyxbtmzh0sw0fJudntquLSmcfHSqTvVMj2DO6Xtv35mV+P8ZFkJh+f8bIQ8yPv2rzymFwoylxNUS3UgIS2LLWljTDtDLQJsHEeKzv/osHkgYay+pydaOcpgcrkWdqytxsi8Os41haOpSmgAQxgitVdDJVDDfzeJjzbT6ja4qfVVpeWpR1Y4A2QNmwId//pnc3yiLZE897Dx8srzwkrH66iNKNbVRVo2krKCkICSnGCQj2uYyUwndCNsJyJrB4lKz9tW51vi/tszIx4Cv3+8GfPoXnsj9hcgkD9tQWnrNzMjFl1THkk2MKKhlUAUqEZTGepyCcBSCMgjngtVgElBNSC9C9wJ0Oj1aaAewGtFdipcWlhvXz3an/+iiGf/Y/RUV4tqfue8pMELz8i2lufdsHj3/inhDOsKogrrucbTHXVDdCZXLIL4cgh0gR4AICMhhcj22C/ocZDdB9yvQPgatE7B6pkcDKzFqMdbzSxuuPd7a9IvAx++zAZ/66Udyb7FkRkZ2RWfeuWN09rurk51JxjIYsTC2FUavhMbToPwwkFNAIxdsDQgL1oIPAVhABO6gDXYRsqOwegMsfRoWj8BKt29EOl/q3Law5U9ms02/AJy61wZ88CfvXQpYq686UL7tF7dOzz+ZCQONDMZnYPKJvfHFUDoIjIBVYHWhzlF6xwDW0Tg6c4QEEQEK9Cys3ADz/wEXboIVBQsRi+cbN93Y2v8dwHX3yoBP/tSjuKeIbPrSQyNHf6M+3Zphg4bRGKYf3eNroXIlEIPpgjVObOBWVjqK9QxwowZbmKEBQMb5z1CzsPBvMPuvcHEOliTJ+Ur35qXdPwr8wj024Ks/fRn3BImN3nPV6I2/Es1kEWMaJqZh66t643NB1ArhnuDhUYIoosCHcWnhC/fGIopkCWQIra/AqT+CuS/CEtjzITdf3P3bt+qd3wkkd9uA//yJp3F3sUme++4rx278hWBaw5iB6UOw/a3QuBJsAibzxRb0zRhKAdxYCB8ywJphQxwFBBVIFmD2r+H0f8NCBvOSY+e3/fm3uPRtQHq3DPi3n3w2dwcbzdn3PGz8G78ZTCsYt7D5IbDtrVDd7AoWTqwn3DfDp/ANwAlnSLAv2jfFN6kE2sLcf8CJf4CFDpwT3HRxz+8D77hbBtz4k3u5Kxxvj7746Ru//nfBdBZSiN/+RiiNg+yAFEMih1dfeEb44S9w8KPAF75GFHgGGAM6BBPB+Q/A8b+DhS52TvC1pYM/CvwEd4EwsRF3hhNq5rInND73O8GGNGQEmDoEm14KQQz6Qr6a1ituwhc7dA1nhlizCA6trh0SPBwBNjfHaDABbHgUZKug/h2RKQ6nR3/k46vXfBP4lzvfBn/0EayHpXBj5WHiC9du23j28UwCG7fAjtdAdRPILoQCApnTr+7D4e6u3f1dwBvtUERgB+Zo62hAB6AEzP4H3P5xWICLZ0ZOfSx5xOOBE+sa8M8/8lTWw1Y5990PG/3GLzAjYKIKO18Io4dA+OLdKISX20MrzvD82gasb4T2Vt260Tjh1lGDiSFpwcl/grPHYB5uubDjH4GXsQ7Cw8ER1sLtyZYDe+u3/QANoCJhw5VQ3Qp6EULACjCecCmGxQ4d422BYu0iiCeuOPZTwY8KcwcNGC91dBtkDJOPhNV56Cyzq3X6xR9bfcgLgH9b04BTaoa1sD+7+f2NeneMioD6DDQOgG4B2gl3YowTaAUEfhSItcPe+uL9COAuosCxEG2cERZXDN287uTFefwwND9HXNdyX/vWH/ocj7h2rf4gXAymGEZgj13eGF19XVCxUC5BY08uTK+60S94Q7kfsHao+6tvKY69LdCCYCgCitGb17aIgKFI8I8DqG/r8VZonWOmvHDNxtbZlwF/yRDCjfosw6gL8ZZGJatSElCdhPIUmCYIQAtgHQOsEx8FEAb5deVydHj1rcCDl98MxAsBocjTSxlIs3ylLZ74ogi6sTiXAYzsgKUFStWMzc2T7/xocs3fABoP4ZHuJD5mqnr7AW56pSwDUQmq04P8Ek5UQT0U8oJcuNZkF5oYC6XJEQhLkBk/99dOAT8NpIAQWF6hvZxQHSlBteqlAWB1Lkd7KWFwW6OAeAzKDShdZKq0fPVW2Xok8Ek8hFsrLXxUTOcx9UpnkkhCqQ7hiBMvBnmPb4LX1cUBtFb47P/cysevnSVNDQ9/4gxPeNkBookGZNYT7cP66eAyxnD6C7Nc99dHuP22JjsuqfG0l+5h6xWbwXqiDV4UMIgGpUEIqExAvEK9lJU2p2fewLABm+0ZChyNDgXbkhMvjSOLCUNkXHOr381DShf7Om71h/I7S/jYPx/hb37vKDrLp47deIx2W/G8d1+OiGKXDnb9AEBAJLhwy3n+9Oe+wrFvtajU4PiRNqdPtHjXD8Pknkknvgh5inTwjHFRENV6LCHjjFEWHvX18OF1oIlDeDLcS4GqaW0bFQuPtiEQxhBWwWS5WBnk4o2EQrdfDMOAc7cscsO/3s5IFXZsi5ECTp3O+NwHz/KIp84wfemUZ4BdYxNw+Z4ZPn/9Kc4cb3H4YES9Lmi2LLcdb/PR/zrFS95VBWTRA/ji3ej1CEJgwxImbFENO7uibPUy4DM4hL0JCoSoXaUgnTChxAaRE5zmTurASwFnAmJAGzA/20R3M7ZvidgwKvIsIeTkbMapI8tMHx4FbfyKTw4xOJSCbDHlthuXmdwg2DgliSOoVQTNVcHJo6ski21KYyXX/AAGLwWcAUUUYLBBCROElGVSDroLT8Y3oDdBgVIcXRpEWloZYKUEq/MIMIFzuch5vPB3sBEITaUsqJYhDAHon8cBdDsKyEArL9/XgJEYrXo0fdFxCKEEEcJITRBIi1YatLcjuNX26kE+GgXG0NOD6VHIjAmx/DA8hL0JClhTukoIixESKwTWKISWIC0Iuc4OYClqwshoRBhKtDYU0MpSrgZs2lkFo/Ibh4GJdsgIKyiNhmzeVePI7DIUEPnPGm9ElGoCVAbWTwFH7Y8ajMJisFJiJNSCZNOtlasrQAcgnKsfBsBoHe/ofnMvkjxvLLkBJhg4a5xwCmoI3P7eSZneXWHbwVFmvzZPpSRAwIVzGVsun2LboRq0ui4vAdbqAwBloSK46knTHP38PEsXU0bHI5orCmUkVz1hI0EVWEm9LZD8WPlm5HXA6gxrNbYoMWSjUmd1CgNksSK6d8EkM4NnLuOFvxgYIHDRgCdEQsdSHhU87bU7uVbDhRPLCGuZvmyKp71xN6WSgdWs+J419HsmLHXYfWmNx71mD1/8j5OcO58iSiUe/sItXPW4sdxIpcEWC0NOWxwPdgJrVJ84A7CmoYVsAPMAYe8k1x9UasLqai5eYG3xzQbRI0aCsS4FzFAjY0ACS11mpsq8/Dv2ceJoF7DsPFChWs7615xxQ9ugg7WDicwgmk0e/Ywxdh9uMHcyYXJTiW3bAmi2oKuBouD5JgzOc5pcvNEYLDqP2nqcro7hEPZOAMhEHGF1lLfYti/cWgN94igc3bHX3Dl7YSWhWtEcujwGKaDdhkWVGycNWAFiuB124q0dREFiIG2xaWPMpi1lSBUst10zJQuR3n1ZMG5058X92ztoLCafj6OsWfG2wSYAKh7H2kFU2cKIHoWleOJbwwznPgKCMDeso3vsgMAJD4pAySH8zs8OpUEhwtWe5QxMMrgmAtCFeFk8F/hmDs49Dbkm4UZLgbA40WFZaSu10S59ijyyJjfBuCZl2AQjwEdQfPojYHiP93ULx+HrMPw7/G8qQr1YAC/8BVg/IoqV1z0acjn9KMhUWE1wCHsnAKx2VCezQcfVjh4txmhkj8JY8AX794T0ooD8WHpFUgjH4sHRujdJhQGFGEAz9Ljrixo23o3gz+V0KZzXMI3RYLXoG6CtbCfx2DIOYe8EgJK2yyqL57VmlzFFER38EIyLAiHAvyFDLtgPYeOEFqKLp0RpIc1IFxKWF1NaqwqtLeVKyEgjpDEeQbXHKARlIdPgCzXCy1FvtNITL8Cogn0jtLFobftTygYrYAYGgCke5DqZrN2qsosP08rmrvWpsUGKMCHYsMi7QSQYCzgTjHuM9RudUAKaztkmt97c49EmR25pMXc2pdWyGANxCcbGQnbuKLFvf51Letyyuwa1GDJAmcJwL/cLE0QR8sW8W7QsD3+da9EalLIoE6wgZGtggJAUSKPGV1XGK7WyaJV/U6hN7qTOQIYIEYCf34EYmCAk4K14ZEnn23z1cwt89KML3HhjQpJCbTxkYvMIm3dESCn6bfLSfJePfrLFhz7cYnLiHA9/eIPHPH6CnYfGII4hMeCnhRGOuKLoTNFZn/k9G7Qmp8qnM0rnCUqeAUGJAklQ+1qWBOjMoJV132yRWiNk/hOsDBAi9t4H4kxw4W7dqlvNqS8t8G//eo7PfaFFXBXse9gkB6+Z4NA1U0xvKVOKBAJLpiwrK4pTx5rc9OULPV7kP/9nhc9+doVnPXOKJz9jI6XJOiQWrHHC13pTnmF7LJofrQ1a4WhQCppi9CulpdssDmHvhAJZfeZEqqPlLElGoywPmVBDoDUyyMAGoAOnNIIAKOqC9Aqg1nz1E+f4s7+YZW7ecPVjp3jKS3dx6KpxyrEBlUHSgTQveGUpGJkI2bJpjEc+bpL5i4pP/s/tfPRfT/LnfzXPiRNtXvWabYxtG4Wk6AHwW/RCvMv9rDfoQdhnPaaaREcqqWz4IB7CpLSBAqmsnmj1HKql556gMoNOJSq2BCFIrQhkBoRYIRHCPaJJvD5AgjF87ZPn+b0/up2MgNe8/yBPfeF2SrGC5RVI9GAb9D8ctQroQCCYqpV44Wt3ceUjpvmXP7yZj3x4nm73FG956y4amxqgiipdpIDC6qLwpf1joy1FKqvUoruaxFZP2bj2ZTyEvQkKRDZLFuTUP27Izj0hSwxR2RJmoEKQgUXKLBduxCDfiQZVWsDJbyzyx39+Glkp8e7vupyrHz0BS6twIQXpvVEaNqGAAhYTWE7ZtbXGu37wKqZmjvBff3eCkfpp3vSm3QTVEmTCe/+X5dR3iM8w2qA0FOKzHlUCTdv4cn3x5gU8hL0JfKw0LvlQd7nUCrtpLa2EBKkliCw6EEhhCEUKQmARCEsOGUMc0J5r8Vd/eztdEfL+77uSw1ePwtllUBak6+yE3/4OR0FxSYIC5lpUGiVe/Zb9CODafzrBrm1necpzdoCVoBPoV3vXLZrUhb4v3qC6ikQFplPb+lcMIexNgo9S42gznP7PcufUK7KKIYwNQSSRAUgpEMIQiNR7ze1EZYYP3DDHsdmM93xPT/ylDZhdAX+L9J8ChRh6IyQo4LeyLCQENcOrXruX5cWMf732DIf2jrJ5T33wfkF3Qade3oPKcvFpYtEdRZvxGzvlDTcwhLA3CT6MNq3att9tLM2+IuhkpLEkiAxBIJwBuQmSBLAUnd3pW5b44KcXePGr9nLNQyfgfNPtDP42OWQCYp1HYn8UsKoI6imvf+M+fv5Mm/+8bpa3v2k7CO2JV4X4fsinSS4+66reCM3K1j9vtE53GELYm2QY85Vdn6mImf+OO7PPzkqmb4AMJEJahAvhEIu0KUKCaSs+8qkLHLp6I895+hRcWAYlQBb1wok3zjAhWBPWulEMRuvml9qMjEW8/g27+PM/vIWjN15k76Vlb+WFq/jGrXyPXY1pZTTt+LHlyvY/Yg2EvQsMI0Znq409P1VbuPi0ejuN0n4KmDwCJEAAQGAtYZj139rQqPCyZ0xCe7lHC4HrHIX/MlWs/7mIKAR79cAa1466Cn+hxd7tMU975gzHzi2yZ28eXcV2l2WGtFj9rkF1FN1OQLOx41cbyezSmgb0LrAOPhuP1X+/s7zwHhErRCAQsngWMIPH466hVg95yTPKVOJVWAGC2L2xVSACRzkgXu0oYIc+GR704oAG437exSaPuyxkZecIJknQxuZh38/5HhND0tVkHU1nxWDLtU9ctfvMH7IOwt5F1kOV1k/f9M3yU9PV7n4ZSlIpkJI8DUReqKyFKDYEyjU2MgAMiNAJ9g0QOSkoQRTiDVCsemGEAd8I48p7mtCQkiS1+M1Olui+eNVj1lKkqrS6aw/fZTudbF0DehdZDy3Cua07ec+JI/F/Bc2sJPpFsKhRoYtUgU0MgYKgb5BCGA0iAylBemlQCBZi/Zei1jdCDQwwBls802vQxlV87XL+DnZ77GhUS9FpSia3RD+xusLnYX2EqyuCu8AHJ7fEP3jxtP4lGSjw7t0SYq2AKE8HKy2BzINAoPKUkXrwZ3JS5OO6RRDAgC1YCLdOfE5dMDNkWSFe5+LbiuayoDpe+otu2/wSwGUHmut+EBHu3b4C66P4xl/+endse/NC830jQqHw/5gjwFoIQ9GPABsIAktfvLAgjEEI41LeL4ZrRYAjti+6mDJWYI1FGzBuVCrf57NM9/M+66h8v182xLXy9ZfsVe8FqAZdp+He/MeIV5/37+t81826Ul9d6rxpBOX9wYYLy0j2TTBWYqSLflE0TwAghStwYq1tYKgWIpwf1lt5i3ZtbrHdZUme86qjaC4ZonL80X0HsjdiWKlGqeAuEPzYC7grCECEaD0+Ja5baVcmVhfUQwM0UvovTwF3TI9uAJMf5xSFMFdAbTHfpzHCrTboQrR2hc7khc7f55UTn7UVK4sQVcrX7T+oXgec9cTb+2oARckO0Wpio7k20SW1eIFHCaXCQOIEWYwtctWFb/EOw48Ur8ibtajzEHfvIhzzXFeZRrlV14nqi09WFSvLktp46c/2HVBvRYgL1TCVdyneQdg/4+5COBqA2+drLz593PystOneegPiSkhQCggiSRCKnIFEuhZaCuF2wkFKCFdiLA6WgYnWuhez1nu0NZjM0DOhL765YkhUtDC1OfrZ3Tu7vwKY0GQSsPezAWubsNipXHL8ePBjnaXs5eVYRdURQVQpTHDi+yaAkLkRbitdowJ46VREinbiezTKoLM87DurhnZHEteiD27bJX6k+Lh7utEaFs/9bQBr/YHfqfn68+dO6+9KO/ox5VhTqQvifjSI3IRQ5uKDXLyQAGLIAFukRo+2x0L4HcxXvN22dLsSEUXfmJyRv7djS/JnQBsgFm7lPeEPkAGeCV40JDauzc7Fz79wTr857ZqHB+hauWwplQVhnKeFkI5FGojhHsg65rVAuWLX7QiUCUxQkl8amwj/duvm7K+AeYB61JUAvvgHw4ACvgwDkNqodHE5fui5OfGKbks9MsvYK4wZiUJNGEEQCMIApLQghJf7ReHLn+VTJYEgCyJ7NCqHX52e5m+nJtKPAysAZZkJQAwLf7ANKLDmzXRUPLrcivYvLAaPba2qh5tMbbNGjGkjR7QVVWFtDAgrRCaFbYfSNIVgSYTBXKkWfXlyXH18bCT7BjCPQy1O/d9FMT44BtyL1PCR6LCuNfVERdVUBQ2sqQACIZMwMKuVMG0GAa0gFKvD3x+SSYB7L/zBMWDYCO51mAoEluE21nI/Q1gIAcUDiT9DcO9geYDxvwD3EfZcmPQlkgAAAABJRU5ErkJggg=="})]})]}),be=()=>o("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e("path",{d:"M0 24.68H24V0.68H0V24.68Z",fill:"url(#pattern0)"}),o("defs",{children:[e("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:e("use",{xlinkHref:"#image0_1443_4017",transform:"scale(0.015625)"})}),e("image",{id:"image0_1443_4017",width:"64",height:"64",xlinkHref:"data:image/png;base64,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"})]})]}),Le=()=>{const[n,t]=g.exports.useState("Awesome");return o(ve,{children:[e(Be,{children:"How was your experience?"}),o(I,{checked:n==="Bad",onClick:()=>t("Bad"),children:[e(E,{type:"radio",name:"selectedExperience",checked:n==="Bad",value:"Bad",onChange:c=>t(c.target.value)}),o(k,{children:[e(me,{})," Bad"]})]}),o(I,{checked:n==="Just OK",onClick:()=>t("Just OK"),children:[e(E,{type:"radio",name:"selectedExperience",checked:n==="Just OK",value:"Just OK",onChange:c=>t(c.target.value)}),o(k,{children:[e(be,{}),"Just OK"]})]}),o(I,{checked:n==="Awesome",onClick:()=>t("Awesome"),children:[e(E,{type:"radio",name:"selectedExperience",checked:n==="Awesome",value:"Awesome",onChange:c=>t(c.target.value)}),o(k,{children:[e(Ae,{}),"Awesome"]})]}),o(ye,{children:[e(Ie,{children:"Share your thoughts"}),e(Ee,{})]})]})},ve=r.div`
  padding: 0 32px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
`,Be=r.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: #111827;
  margin-bottom: 24px;
`,I=r.div`
  border-radius: 120px;
  font-size: 13px;
  line-height: 25px;
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 12px;
  cursor: pointer;

  font-weight: ${n=>n.checked?"bold":"normal"};
  color: ${n=>n.checked?"#fff":"#6b7280;"};
  background: ${n=>n.checked?"#8dc546":"rgba(107, 114, 128, 0.08)"};
`,E=r.input`
  background: rgba(255, 255, 255, 0.2);
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  vertical-align: sub;
  visibility: hidden;
  cursor: pointer;
`,k=r.label`
  font-size: 13px;
  line-height: 25px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`,ye=r.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 24px;
`,Ie=r.span`
  color: #374151;
  font-size: 14px;
`,Ee=r.input`
  margin-top: 4px;
  height: 38px;
  color: #111827;
  border: 1px solid #e8eaf5;
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  padding: 0 13px;
  outline: none;
`,ke=({style:n})=>o("svg",{style:n,width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M6.72038 10.6876C6.16987 10.6877 5.63169 10.5246 5.17392 10.2188C4.71615 9.91301 4.35936 9.47833 4.14866 8.96974C3.93797 8.46114 3.88285 7.90149 3.99026 7.36156C4.09768 6.82163 4.36282 6.32569 4.75213 5.93647L7.62386 3.0653C8.14583 2.5433 8.85378 2.25003 9.59198 2.25C10.3302 2.24997 11.0382 2.5432 11.5602 3.06516C12.0822 3.58713 12.3754 4.29508 12.3755 5.03328C12.3755 5.77148 12.0823 6.47945 11.5603 7.00145L11.2496 7.31229L10.4532 6.51753L10.7669 6.20372C11.0767 5.89238 11.2504 5.47095 11.25 5.03177C11.2496 4.59259 11.0751 4.17148 10.7648 3.86073C10.4488 3.55917 10.0287 3.39091 9.59194 3.39091C9.15514 3.39091 8.73512 3.55917 8.41913 3.86073L5.54773 6.73173C5.3937 6.8857 5.27151 7.0685 5.18815 7.26969C5.10478 7.47089 5.06188 7.68654 5.06188 7.90432C5.06188 8.12211 5.10478 8.33776 5.18815 8.53895C5.27151 8.74015 5.3937 8.92295 5.54773 9.07691C5.86373 9.37848 6.28374 9.54673 6.72055 9.54673C7.15735 9.54673 7.57736 9.37848 7.89336 9.07691L8.6889 9.87257C8.43095 10.1318 8.12415 10.3373 7.78626 10.4772C7.44837 10.6171 7.08609 10.6886 6.72038 10.6876Z",fill:"#4F46E5"}),e("path",{d:"M11.2204 9.56238C10.6699 9.56249 10.1317 9.39934 9.67392 9.09355C9.21615 8.78776 8.85936 8.35308 8.64866 7.84449C8.43797 7.33589 8.38285 6.77624 8.49026 6.23631C8.59768 5.69638 8.86282 5.20044 9.25213 4.81122L9.56297 4.50038L10.3585 5.2961L10.0477 5.60676C9.89368 5.76073 9.77153 5.94352 9.68819 6.1447C9.60485 6.34588 9.56195 6.56151 9.56195 6.77927C9.56195 6.99703 9.60485 7.21265 9.68819 7.41383C9.77153 7.61501 9.89368 7.7978 10.0477 7.95177C10.3637 8.25334 10.7837 8.42159 11.2205 8.42159C11.6573 8.42159 12.0773 8.25334 12.3933 7.95177C12.5396 7.80552 15.0535 5.29154 15.265 5.08049C15.5755 4.7693 15.7499 4.34765 15.7499 3.90804C15.7499 3.46844 15.5755 3.04679 15.265 2.7356C14.949 2.43403 14.529 2.26577 14.0922 2.26577C13.6554 2.26577 13.2354 2.43403 12.9194 2.7356L12.1239 1.93994C12.646 1.41873 13.3537 1.12614 14.0915 1.12647C14.8293 1.12679 15.5367 1.42 16.0584 1.94167C16.5801 2.46333 16.8733 3.17078 16.8737 3.90854C16.874 4.64631 16.5815 5.35403 16.0603 5.8762C15.8485 6.0877 13.3355 8.60028 13.1894 8.74692C12.9314 9.00625 12.6245 9.21185 12.2865 9.35182C11.9486 9.49179 11.5862 9.56336 11.2204 9.56238Z",fill:"#4F46E5"}),e("path",{d:"M13.5 16.875H2.25C1.95173 16.8747 1.66576 16.7561 1.45485 16.5451C1.24394 16.3342 1.12531 16.0483 1.125 15.75V4.5C1.12531 4.20173 1.24394 3.91576 1.45485 3.70485C1.66576 3.49394 1.95173 3.37531 2.25 3.375H4.5V4.5H2.25V15.75H13.5V10.125H14.625V15.75C14.6247 16.0483 14.5061 16.3342 14.2951 16.5451C14.0842 16.7561 13.7983 16.8747 13.5 16.875Z",fill:"#4F46E5"})]}),De=()=>o("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5 11.25C5.69036 11.25 6.25 10.6904 6.25 10C6.25 9.30964 5.69036 8.75 5 8.75C4.30964 8.75 3.75 9.30964 3.75 10C3.75 10.6904 4.30964 11.25 5 11.25Z",fill:"white"}),e("path",{d:"M10 11.25C10.6904 11.25 11.25 10.6904 11.25 10C11.25 9.30964 10.6904 8.75 10 8.75C9.30964 8.75 8.75 9.30964 8.75 10C8.75 10.6904 9.30964 11.25 10 11.25Z",fill:"white"}),e("path",{d:"M15 11.25C15.6904 11.25 16.25 10.6904 16.25 10C16.25 9.30964 15.6904 8.75 15 8.75C14.3096 8.75 13.75 9.30964 13.75 10C13.75 10.6904 14.3096 11.25 15 11.25Z",fill:"white"})]}),He=()=>e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M17.5 3.75H2.5C2.16848 3.75 1.85054 3.8817 1.61612 4.11612C1.3817 4.35054 1.25 4.66848 1.25 5V15C1.25 15.3315 1.3817 15.6495 1.61612 15.8839C1.85054 16.1183 2.16848 16.25 2.5 16.25H17.5C17.8315 16.25 18.1495 16.1183 18.3839 15.8839C18.6183 15.6495 18.75 15.3315 18.75 15V5C18.75 4.66848 18.6183 4.35054 18.3839 4.11612C18.1495 3.8817 17.8315 3.75 17.5 3.75ZM16.125 5L10 9.2375L3.875 5H16.125ZM2.5 15V5.56875L9.64375 10.5125C9.74837 10.5851 9.87267 10.624 10 10.624C10.1273 10.624 10.2516 10.5851 10.3562 10.5125L17.5 5.56875V15H2.5Z",fill:"white"})}),Me=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7.99989 3.26L9.37989 6.05L9.60989 6.55L10.1099 6.625L13.1899 7.07L10.9999 9.22L10.6249 9.585L10.7149 10.085L11.2399 13.15L8.48489 11.705L7.99989 11.5L7.53489 11.745L4.77989 13.17L5.27989 10.105L5.36989 9.605L4.99989 9.22L2.78989 7.045L5.86989 6.6L6.36989 6.525L6.59989 6.025L7.99989 3.26ZM7.99989 1L5.72489 5.61L0.639893 6.345L4.31989 9.935L3.44989 15L7.99989 12.61L12.5499 15L11.6799 9.935L15.3599 6.35L10.2749 5.61L7.99989 1Z",fill:"#4F46E5"})}),Pe=()=>e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M6.47008 16.0209C6.96175 15.8042 7.51175 15.7634 8.02675 15.9051C8.66842 16.0801 9.33091 16.1684 10.0001 16.1667C13.8209 16.1667 16.6667 13.4276 16.6667 9.75008C16.6667 6.07258 13.8209 3.33341 10.0001 3.33341C6.17925 3.33341 3.33341 6.07258 3.33341 9.75008C3.33341 11.6417 4.08008 13.3101 5.38841 14.4801C5.62613 14.6906 5.81836 14.9475 5.95334 15.2349C6.08832 15.5224 6.16321 15.8344 6.17341 16.1517L6.47008 16.0209ZM10.0001 1.66675C14.6951 1.66675 18.3334 5.10591 18.3334 9.75008C18.3334 14.3942 14.6951 17.8334 10.0001 17.8334C9.1852 17.8355 8.37374 17.7279 7.58758 17.5134C7.43992 17.4728 7.28278 17.4843 7.14258 17.5459L5.48925 18.2759C5.38936 18.3201 5.28015 18.339 5.17123 18.331C5.0623 18.3231 4.957 18.2885 4.86458 18.2303C4.77216 18.1721 4.69545 18.0921 4.64119 17.9973C4.58693 17.9026 4.55679 17.7959 4.55342 17.6868L4.50758 16.2034C4.50458 16.1132 4.48323 16.0246 4.44483 15.9429C4.40643 15.8612 4.35179 15.7883 4.28425 15.7284C2.66258 14.2792 1.66675 12.1809 1.66675 9.75008C1.66675 5.10591 5.30591 1.66675 10.0001 1.66675ZM4.99591 12.1142L7.44342 8.23092C7.5355 8.08471 7.6569 7.95918 7.79995 7.86226C7.94299 7.76534 8.10458 7.69913 8.27451 7.66781C8.44443 7.63648 8.619 7.64073 8.78721 7.68028C8.95541 7.71983 9.11358 7.79382 9.25175 7.89758L11.1984 9.35592C11.2852 9.42142 11.3909 9.45686 11.4997 9.45686C11.6084 9.45686 11.7141 9.42142 11.8009 9.35592L14.4301 7.35925C14.7809 7.09342 15.2392 7.51341 15.0042 7.88675L12.5567 11.7701C12.4647 11.9163 12.3433 12.0418 12.2002 12.1387C12.0572 12.2357 11.8956 12.3019 11.7257 12.3332C11.5557 12.3645 11.3812 12.3603 11.213 12.3207C11.0448 12.2812 10.8866 12.2072 10.7484 12.1034L8.80175 10.6451C8.71498 10.5796 8.60922 10.5441 8.5005 10.5441C8.39178 10.5441 8.28602 10.5796 8.19925 10.6451L5.57008 12.6409C5.21925 12.9067 4.76091 12.4867 4.99591 12.1134V12.1142Z",fill:"white"})}),Fe=()=>o("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o("g",{clipPath:"url(#clip0_1443_4084)",children:[e("path",{d:"M14.7993 11.4922C14.7603 11.4735 13.3023 10.7555 13.0432 10.6623C12.9374 10.6243 12.8241 10.5872 12.7036 10.5872C12.5067 10.5872 12.3413 10.6853 12.2125 10.878C12.0668 11.0945 11.6259 11.6099 11.4897 11.7639C11.4719 11.7842 11.4476 11.8085 11.4331 11.8085C11.42 11.8085 11.1944 11.7156 11.126 11.6859C9.56195 11.0065 8.37475 9.37265 8.21196 9.09713C8.18871 9.05752 8.18773 9.03954 8.18754 9.03954C8.19325 9.01856 8.24585 8.96584 8.27299 8.93863C8.35241 8.86006 8.43845 8.75649 8.5217 8.65629C8.56111 8.60882 8.60059 8.56129 8.63936 8.51649C8.76014 8.37597 8.8139 8.26687 8.87624 8.14051L8.9089 8.07486C9.06111 7.77246 8.93111 7.51726 8.8891 7.43486C8.85462 7.3659 8.23897 5.88006 8.17351 5.72395C8.01611 5.34726 7.80812 5.17188 7.5191 5.17188C7.49228 5.17188 7.5191 5.17187 7.40663 5.17662C7.26968 5.18239 6.5239 5.28058 6.19416 5.48843C5.84449 5.70889 5.25293 6.41162 5.25293 7.64746C5.25293 8.75973 5.95877 9.80993 6.26183 10.2093C6.26936 10.2194 6.28319 10.2399 6.30325 10.2692C7.46384 11.9641 8.91066 13.2203 10.3773 13.8062C11.7894 14.3702 12.458 14.4354 12.8381 14.4354C12.8382 14.4354 12.8382 14.4354 12.8382 14.4354C12.9979 14.4354 13.1258 14.4228 13.2386 14.4117L13.3101 14.4049C13.7979 14.3617 14.8699 13.8062 15.1137 13.1286C15.3058 12.5949 15.3564 12.0118 15.2286 11.8002C15.1411 11.6563 14.9903 11.5839 14.7993 11.4922Z",fill:"white"}),e("path",{d:"M10.1778 0C4.76114 0 0.354385 4.37364 0.354385 9.74955C0.354385 11.4883 0.81971 13.1903 1.7012 14.6799L0.0139953 19.6569C-0.0174333 19.7497 0.00594334 19.8523 0.0745797 19.9221C0.124125 19.9727 0.191333 20 0.259969 20C0.286268 20 0.312762 19.996 0.338606 19.9878L5.52822 18.3387C6.94835 19.0975 8.55341 19.498 10.1778 19.498C15.5939 19.4981 20.0002 15.1249 20.0002 9.74955C20.0002 4.37364 15.5939 0 10.1778 0ZM10.1778 17.4671C8.64925 17.4671 7.1688 17.0258 5.8962 16.1907C5.85341 16.1626 5.80374 16.1482 5.75374 16.1482C5.72731 16.1482 5.70081 16.1522 5.67503 16.1604L3.07536 16.9868L3.91458 14.5108C3.94172 14.4307 3.92815 14.3423 3.87815 14.274C2.90906 12.9499 2.39679 11.3854 2.39679 9.74955C2.39679 5.49351 5.88731 2.03091 10.1777 2.03091C14.4676 2.03091 17.9577 5.49351 17.9577 9.74955C17.9578 14.0051 14.4677 17.4671 10.1778 17.4671Z",fill:"white"})]}),e("defs",{children:e("clipPath",{id:"clip0_1443_4084",children:e("rect",{width:"20",height:"20",fill:"white"})})})]}),ze=()=>o(Se,{children:[e(Ve,{children:"Thank you. Share your love!"}),o("div",{style:{position:"relative"},children:[e(Ye,{value:"https://writesonic.com",readOnly:!0}),e("div",{style:{position:"absolute",height:"38px",top:"5px",right:"38px",width:"1px",backgroundColor:"#E8EAF5"}}),e(ke,{style:{position:"absolute",right:"10px",top:"14px",cursor:"pointer"}})]}),o(Ge,{children:[e(A,{backColor:"linear-gradient(180deg, #94EA86 -15%, #5CC642 100%);",children:e(Fe,{})}),e(A,{backColor:"#FF6D5E",children:e(He,{})}),e(A,{backColor:"#3D9DF5",children:e(Pe,{})}),e(A,{children:e(De,{})})]}),o(je,{children:[e(Me,{}),"Rate us on Chrome Store"]})]}),Se=r.div`
  padding: 0 32px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
`,Ve=r.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: #111827;
  margin-bottom: 16px;
`,Ye=r.input`
  margin-top: 4px;
  height: 38px;
  color: #111827;
  border: 1px solid #e8eaf5;
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  padding: 0 13px;
  outline: none;
  width: 100%;
`,je=r.button`
  background: rgba(79, 70, 229, 0.08);
  border-radius: 6px;
  font-weight: 500;
  font-size: 12px;
  color: #4f46e5;
  text-align: center;
  border: none;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  margin-bottom: 24px;
`,Ge=r.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 50px;
`,A=r.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  background: ${n=>{var t;return(t=n.backColor)!=null?t:"#BEC5D7"}};
  cursor: pointer;
`;function Qe(){const[n,t]=g.exports.useState(!1),[c,a]=g.exports.useState([]),[i,s]=g.exports.useState(1);return g.exports.useEffect(()=>{chrome.storage.local.get(["isLogged","activeSites"],({isLogged:d,activeSites:l})=>{t(d),a(l),console.log(l),l||(chrome.storage.local.set({activeSites:[]}),a([]))})},[]),o("div",{children:[e(ie,{}),!n&&e(_,{}),n&&i===1&&e(le,{activeSites:c,setActivePage:s}),n&&i===2&&e(Le,{}),n&&i===3&&e(ze,{}),n&&e(we,{})]})}const m=R.create({baseURL:"https://api.writesonic.com/v1/",headers:{"Content-Type":"application/json"}});class Ke{static async fetch(){return(await m.get("/credit-v2/left-credits")).data}}function Y(){return B("left-credits",()=>Ke.fetch(),{retry:2})}const b=({label:n,showBuyLink:t})=>o(p,{children:[e(u,{}),o(Ue,{children:[e(Ze,{src:chrome.runtime.getURL("assets/img/misuse.svg")}),o("span",{children:[n,t&&e(Oe,{href:String("https://app.writesonic.com"),target:"_blank",rel:"noreferrer",children:"here"})]})]})]}),Ue=r.div`
  height: 46px;
  width: 100%;
  background: rgba(255, 110, 64, 0.1);
  border-radius: 6px;
  margin: 14px;
  font-size: 12px;
  line-height: 18px;
  color: #ff6e40;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,Ze=r.img`
  margin: 0 8px;
  margin-left: 15px;
`,Oe=r.a`
  color: #ff6e40;
`,j=({notSupported:n})=>{var i,s,d,l;const{data:t}=Y(),c=t==null?void 0:t.is_unlimited,a=((i=t==null?void 0:t.one_time_credits)!=null?i:0)+((s=t==null?void 0:t.recurring_credits)!=null?s:0)+((d=t==null?void 0:t.lifetime_deal_credits)!=null?d:0)+((l=t==null?void 0:t.reward_credits)!=null?l:0);return n?e(b,{label:"Sorry, the text you\u2019ve selected is not supported."}):e(Re,{children:c?e(Ne,{src:chrome.runtime.getURL("assets/img/logo.png")}):o(p,{children:[o(Te,{children:["\u2764\uFE0F ",e("strong",{children:"Upgrade now"})," for ",e("strong",{children:"\u221E"})," generations!"]}),e(We,{children:a>0?o("span",{children:["\u26A1 ",e("strong",{children:a})," credits left"]}):o("span",{style:{color:"rgba(107, 114, 128, 0.64)"},children:["\u{1F622} ",e("strong",{children:"0"})," credits left"]})})]})})},Re=r.footer`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 14px 0;
`,Te=r.span`
  background: rgba(236, 72, 153, 0.07);
  border-radius: 6px;
  color: rgba(236, 72, 153, 0.8);
  padding: 6px 12px;
  font-weight: 500;
  font-size: 12px;
`,We=r.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #8dc546;
`,Ne=r.img`
  height: 23px;
  margin-top: -0.5px;
`,Xe=({setView:n,setFeature:t})=>o(qe,{children:[o(D,{onClick:()=>{t("rephrase"),n(2)},children:[e("img",{src:chrome.runtime.getURL("assets/img/rewrite.svg")}),e(H,{children:"Rewrite"})]}),o(D,{onClick:()=>{t("expand"),n(2)},children:[e("img",{src:chrome.runtime.getURL("assets/img/expand.svg")}),e(H,{children:"Expand"})]}),o(D,{onClick:()=>{t("shorten"),n(2)},children:[e("img",{src:chrome.runtime.getURL("assets/img/shorten.svg")}),e(H,{children:"Shorten"})]}),e(j,{notSupported:!1})]}),qe=r.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.04), 0px 11px 22px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
  margin-top: -2px;
  margin-left: 5px;
`,D=r.div`
  padding: 14px 0;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(107, 114, 128, 0.08);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:first-child,
  &:nth-child(2) {
    border-right: 1px solid rgba(107, 114, 128, 0.08);
  }
`,H=r.span`
  color: #6b7280;
  font-size: 14px;
  margin-left: 5px;
`,Je=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})});class _e{static async fetch(){return(await m.get("/lists/tone-of-voices")).data}}function $e(){return B("voices",()=>_e.fetch(),{retry:2})}const e1=()=>e(t1,{children:o(n1,{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 40 40",enableBackground:"new 0 0 40 40",xmlSpace:"preserve",children:[e("path",{opacity:"0.2",fill:"#000",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}),e("path",{fill:"#000",d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z",children:e("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"})})]})}),t1=r.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 5px 0 15px;
`,n1=r.svg`
  & path,
  & rect {
    fill: #ff6700;
  }
`;const o1=({copies:n,text:t,feature:c,isFetching:a,error:i,setView:s,setVoice:d})=>{$e();function l(){switch(c){case"rephrase":return o(p,{children:[e("img",{src:chrome.runtime.getURL("assets/img/rewrite.svg")}),e(M,{children:"Rewrite"})]});case"expand":return o(p,{children:[e("img",{src:chrome.runtime.getURL("assets/img/expand.svg")}),e(M,{children:"Expand"})]});case"shorten":return o(p,{children:[e("img",{src:chrome.runtime.getURL("assets/img/shorten.svg")}),e(M,{children:"Shorten"})]})}}return o(i1,{children:[e(s1,{children:o(c1,{children:[e(a1,{id:"writesonic-back",onClick:()=>s(1),src:chrome.runtime.getURL("assets/img/arrow-left.svg")}),l()]})}),a&&e(e1,{}),i&&e(b,{label:"Sorry, the text you\u2019ve selected is not supported"}),n&&e(r1,{fromText:t,setView:s,texts:n.map(h=>h.text),textMaxLimit:c==="expand"?300:1e3}),n===void 0&&a===!1&&i===null&&e(b,{label:"Your selected text needs to be at least 6 words long. Please select a longer piece of text and try again."})]})},r1=({fromText:n,texts:t,setView:c,textMaxLimit:a})=>{var f,w,C,P;const{data:i}=Y(),s=((f=i==null?void 0:i.one_time_credits)!=null?f:0)+((w=i==null?void 0:i.recurring_credits)!=null?w:0)+((C=i==null?void 0:i.lifetime_deal_credits)!=null?C:0)+((P=i==null?void 0:i.reward_credits)!=null?P:0),[d,l]=g.exports.useState(!1),[h,x]=g.exports.useState(!1);return o(p,{children:[(t==null?void 0:t.length)>0&&(t==null?void 0:t.length)<a&&o(p,{children:[e(u,{}),e(l1,{children:t==null?void 0:t.map((L,O)=>e(d1,{onClick:()=>{d===!1&&(chrome.runtime.sendMessage({updateText:L,from:n}),document.getElementById("writesonic__root").style.display="none",c(1))},children:o(g1,{children:[L,e(G,{id:"copyText","aria-label":h?"Copied!":"Copy Text","data-balloon-pos":"left",onMouseOver:()=>l(!0),onMouseOut:()=>l(!1),onClick:()=>{x(!0),navigator.clipboard.writeText(L)},children:e(Je,{})})]})},O))}),e(u,{}),e(j,{})]}),t.length===0&&s===0&&e(b,{label:"You don't have enough credits. Purchase more by clicking ",showBuyLink:!0})]})},i1=r.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.04), 0px 11px 22px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
  margin-top: -2px;
  margin-left: 5px;
`,s1=r.div`
  padding: 0 14px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 2px;
`,c1=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;r.select`
  background: #fff;
  color: #111827;
  width: 164px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e8eaf5;
  border-radius: 6px;
  padding: 9px 13px;
`;const a1=r.img`
  margin-left: 2px;
  margin-right: 16px;
  cursor: pointer;
`,M=r.span`
  margin-left: 8px;
  color: #6b7280;
`,l1=r.ul`
  width: 100%;
  padding: 0 14px;
  list-style-type: none;
  max-height: 200px;
  overflow-y: auto;
`,d1=r.li`
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #111827;
  border-bottom: 1px solid rgba(107, 114, 128, 0.08);
  cursor: pointer;
  display: flex;
  align-items: center;
  &:last-child {
    border-bottom: unset;
  }
`,G=r.button`
  display: none;
  width: 20px;
  height: 20px;
  justify-content: end;
  border: none;
  background-color: transparent;
  position: relative;
  &:hover {
    color: #4f46e5;
  }
`,g1=r.span`
  width: 100%;
  margin: 5px 0;
  font-weight: normal;
  font-size: 16px;
  color: #111827;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px 16px 5px 5px;
  &:hover {
    background: #e8f5e9;
    border-radius: 6px;
  }
  &:hover ${G} {
    display: flex;
  }
`,h1=()=>o(p1,{children:[e("img",{src:chrome.runtime.getURL("assets/img/error-saly.png")}),o(x1,{children:[e("strong",{children:"Uh-oh!"})," Something went wrong on our side. Try to reload the page and run the extention again."]})]}),p1=r.div`
  width: 386px;
  height: 111px;
  background-color: transparent;
  background: url('assets/img/error-background.png');
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 6px;
`,x1=r.span`
  font-family: 'Inter', sans-serif;
  width: 223px;
  height: 63px;
  font-size: 14px;
  line-height: 21px;
  color: #fff;
`;class u1{static async fetch(t,c,a){let i="";const s={language:"en",tone_of_voice:a};switch(c){case"rephrase":i="/extension/content/content-rephrase",s.content_to_rephrase=t;break;case"expand":i="/extension/content/sentence-expand",s.content_to_expand=t;break;case"shorten":i="/extension/content/content-shorten",s.content_to_shorten=t;break}return(await m.post(i,s)).data}}function f1(n,t,c){return B(`${n}-${t}-${c}`,()=>u1.fetch(n,t,c),{refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchOnMount:!1,retry:2,enabled:n.split(" ").length>5&&t.length>3&&c.length>3})}const w1=({show:n,text:t,updatedFrameWidth:c})=>{const a=document.getElementById("writesonic-iframe");if(!n)return a.style.width="30px",a.style.height="30px",null;const[i,s]=g.exports.useState(1),[d,l]=g.exports.useState(""),[h,x]=g.exports.useState("excited"),{data:f,isFetching:w,error:C}=f1(t,d,h);switch(g.exports.useEffect(()=>{switch(console.log("updatedFrameWidth",c),i){case 1:a.style.width="400px",a.style.height="170px";break;case 2:a.style.width=c+"px",a.style.height="370px"}},[i]),i==2&&(a.style.width=c+"px"),i){case 1:return e(Xe,{setView:s,setFeature:l});case 2:return e(o1,{text:t,setView:s,setVoice:x,copies:f,feature:d,isFetching:w,error:C});default:return e(h1,{})}},C1=r.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-image: url(${chrome.runtime.getURL("favicon.png")});
  background-size: contain;
  border: none;
  margin-left : 2px;
  background-color: rgba(0, 0, 0, 0);
`,A1=({setShow:n})=>e(C1,{onClick:()=>{n(t=>!t)}});let Q,K,U=400;chrome.runtime.onMessage.addListener(({changeText:n,frameWidth:t})=>{const c=document.getElementById("writesonic__root");if(!n||n.split(" ").length<5){c.style.display="none",Q(!1);return}U=t,K(n),c.style.display="block";const a=document.getElementById("bulleto");a&&a.remove()});const m1=()=>{const[n,t]=g.exports.useState(!1),[c,a]=g.exports.useState("");Q=t,K=a;function i(){const s=document.getElementById("writesonic__root");s&&(s.style.display="none")}return o("div",{style:{},children:[e("div",{onClick:i,style:{zIndex:9999,position:"absolute",left:"30px",height:"30px",top:"0px",width:"2000px"}}),e(A1,{setShow:t}),e(w1,{show:n,text:c,updatedFrameWidth:U})]})},b1=T`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 350px;
}
`,Z=new W;document.getElementById("writesonic__root--popup")&&F.render(o(z.StrictMode,{children:[e(b1,{}),e(S,{client:Z,children:e(Qe,{})})]}),document.getElementById("writesonic__root--popup"));chrome.storage.local.get("accessToken",({accessToken:n})=>{!n||(m.defaults.headers.common["access-token"]=n)});document.getElementById("writesonic__root")&&F.render(e(z.StrictMode,{children:e(N,{id:"writesonic-iframe",scrolling:"no",style:{width:"30px",height:"30px",position:"fixed",zIndex:99999999,border:"none",colorScheme:"normal"},head:[e("link",{type:"text/css",rel:"stylesheet",href:chrome.runtime.getURL("/ui/index.css")},"0")],children:e(X.FrameContextConsumer,{children:n=>{var t;return e(q,{target:(t=n.document)==null?void 0:t.head,children:e(S,{client:Z,children:e(m1,{})})})}})})}),document.getElementById("writesonic__root"));
