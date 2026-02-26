import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as S,C as r}from"./Tag-BctVKyBN.js";import"./index-yBjzXJbu.js";const F={title:"Components/Tag",component:S,parameters:{layout:"centered"}},o={args:{children:"Category"}},s={args:{children:"Home",teamColor:!0}},a={args:{children:"Live",icon:"fiber_manual_record",iconPosition:"leading"}},i={args:{children:"Filter",icon:"close",iconPosition:"trailing"}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{surface:"bordered",children:"All"}),e.jsx(r,{surface:"bordered",teamColor:!0,children:"Home"}),e.jsx(r,{surface:"bordered",icon:"close",iconPosition:"trailing",children:"Filter"}),e.jsx(r,{surface:"bordered",disabled:!0,children:"Disabled"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{surface:"ghost",children:"All"}),e.jsx(r,{surface:"ghost",teamColor:!0,children:"Home"})]})};var t,d,l;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Category'
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Home',
    teamColor: true
  }
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,g,C;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Live',
    icon: 'fiber_manual_record',
    iconPosition: 'leading'
  }
}`,...(C=(g=a.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var f,x,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Filter',
    icon: 'close',
    iconPosition: 'trailing'
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,j,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip surface="bordered">All</Chip>
      <Chip surface="bordered" teamColor>Home</Chip>
      <Chip surface="bordered" icon="close" iconPosition="trailing">Filter</Chip>
      <Chip surface="bordered" disabled>Disabled</Chip>
    </div>
}`,...(v=(j=c.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var T,H,P;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Chip surface="ghost">All</Chip>
      <Chip surface="ghost" teamColor>Home</Chip>
    </div>
}`,...(P=(H=n.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const I=["Default","TeamColor","WithLeadingIcon","WithTrailingIcon","ChipBordered","ChipGhost"];export{c as ChipBordered,n as ChipGhost,o as Default,s as TeamColor,a as WithLeadingIcon,i as WithTrailingIcon,I as __namedExportsOrder,F as default};
